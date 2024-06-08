var dataXML = {};

var coresProdutos = {
    "COI": "#FF9999", // Vermelho claro
    "COII": "#99FF99", // Verde claro
    "COIII": "#9999FF", // Azul claro
    "tRNA-Met": "#FFCC99", // Pêssego
    "tRNA-Gln": "#CC99FF", // Lavanda
    "tRNA-Lys": "#FFFF99", // Amarelo claro
    "tRNA-Ile": "#99FFFF", // Ciano claro
    "tRNA-Trp": "#FF99CC", // Rosa claro
    "tRNA-Cys": "#CCFF99", // Verde limão
    "tRNA-Tyr": "#FF9966", // Coral claro
    "tRNA-Leu": "#66FFCC", // Turquesa claro
    "tRNA-Asp": "#FF6666", // Salmão claro
    "tRNA-His": "#66FF99", // Menta claro
    "tRNA-Thr": "#6699FF", // Azul céu claro
    "tRNA-Pro": "#CC66FF", // Orquídea claro
    "tRNA-Ser": "#99CCFF", // Azul bebê
    "tRNA-Val": "#FFCC66", // Dourado claro
    "tRNA-Gly": "#66CCCC", // Água-marinha claro
    "tRNA-Ala": "#CC9966", // Bronze claro
    "tRNA-Arg": "#FF6666", // Vermelho pastel
    "tRNA-Asn": "#66CC99", // Jade claro
    "tRNA-Glu": "#9966FF", // Ametista claro
    "tRNA-Phe": "#FF6699", // Rosa quente claro
    "ND1": "#66FF66", // Verde néon claro
    "ND2": "#FF66CC", // Magenta claro
    "ND3": "#66CCFF", // Azul anil claro
    "ND4": "#CCFF66", // Lima claro
    "ND4L": "#FF9933", // Tangerina claro
    "ND5": "#33FF99", // Esmeralda claro
    "ND6": "#9933FF", // Violeta claro
    "ATP8": "#33FFCC", // Malva claro
    "ATP6": "#FF33CC", // Rosa choque claro
    "16S": "#33CCFF", // Azul piscina claro
    "12S": "#CCFF33", // Limão claro
    "Control Region": "#FF3366", // Rosa vermelho claro
    "CYTB": "#3366FF" // Azul royal claro
};

function readXML(id) {
    return new Promise((resolve, reject) => {
        const url = `https://www.ncbi.nlm.nih.gov/sviewer/viewer.cgi?tool=portal&save=file&log$=seqview&db=nuccore&report=gbc_xml&id=${id}&conwithfeat=on&withparts=on&show-sequence=on&hide-cdd=on`;
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, "application/xml");
                const features = xml.querySelectorAll("INSDFeature");
                const produtos = [];

                features.forEach(feature => {
                    if (["tRNA", "rRNA", "CDS"].includes(feature.querySelector("INSDFeature_key").textContent)) {
                        const qualifiers = feature.querySelectorAll("INSDFeature_quals > INSDQualifier");
                        qualifiers.forEach(qualifier => {
                            if (qualifier.querySelector("INSDQualifier_name").textContent === "product") {
                                let value = qualifier.querySelector("INSDQualifier_value").textContent;
                                for (const key in MitochondrialGenes) {
                                    if (MitochondrialGenes[key].includes(value)) {
                                        value = key;
                                        break;
                                    }
                                }
                                produtos.push(value);
                            }
                        });
                    }
                });

                dataXML[id] = {
                    organismos: Array.from(xml.querySelectorAll("INSDSeq_organism")).map(org => org.textContent),
                    vouchers: Array.from(xml.querySelectorAll("INSDSeq_accession-version")).map(voucher => voucher.textContent),
                    produtos: produtos
                };
                resolve(dataXML[id]);
            })
            .catch(err => {
                console.error('Erro ao carregar o XML:', err);
                reject(err);
            });
    });
}

const vouchersList = document.getElementById('vouchersList');
const startSearch = document.getElementById('startSearch');
startSearch.addEventListener('click', async function () {
    if (vouchersList.value.trim().length === 0) {
        alert('Enter the GenBank Vouchers');
        return;
    } else {
        $('#LoadingPumas').modal('show');
        const vouchers = vouchersList.value.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        for (let i = 0; i < vouchers.length; i++) {
            try {
                await readXML(vouchers[i]);
                console.log(vouchers[i]);
            } catch (err) {
                console.error('Erro ao processar o voucher:', vouchers[i], err);
            }
        }
        for (let i = 0; i < vouchers.length; i++) {
            criarSVG(dataXML[vouchers[i]].organismos, dataXML[vouchers[i]].vouchers, dataXML[vouchers[i]].produtos);
        }
        $('#LoadingPumas').modal('hide');
        console.log(dataXML);
    }
});

function criarSVG(nomeEspecie, voucher, produtos) {
    const pieceWidth = 125;
    const pieceHeight = pieceWidth / 2;

    // Garante que voucher é uma string e substitui pontos no voucher por sublinhados
    const safeVoucher = String(voucher).replace(/\./g, '_');

    // Reorganiza a lista de produtos para começar com "12S"
    const index12S = produtos.indexOf("12S");
    if (index12S !== -1) {
        const produtosAntes12S = produtos.slice(0, index12S);
        const produtosDepois12S = produtos.slice(index12S);
        produtos = produtosDepois12S.concat(produtosAntes12S);
    }

    // Cria o elemento SVG ou reutiliza o existente
    const svgNS = "http://www.w3.org/2000/svg";
    let svg = document.querySelector(`#svg-${safeVoucher}`);
    if (!svg) {
        svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", `svg-${safeVoucher}`);
    } else {
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
    }

    const svgWidth = pieceWidth * produtos.length;
    svg.setAttribute("width", svgWidth.toString());
    svg.setAttribute("height", (pieceHeight + 20).toString());

    function adicionarElemento(index, lado) {
        produtos.splice(lado === 'esquerda' ? index : index + 1, 0, '-');
        criarSVG(nomeEspecie, voucher, produtos);
        //scrollToEnd();
    }

    function removerElemento(index) {
        produtos.splice(index, 1);
        criarSVG(nomeEspecie, voucher, produtos);
    }

    produtos.forEach((produto, index) => {
        // Cria o caminho para a borda da peça de quebra-cabeça
        let path = document.createElementNS(svgNS, "path");
        let d = `M ${pieceWidth * index},0 L ${pieceWidth * (index + 1)},0 L ${pieceWidth * (index + 1)},${pieceHeight} L ${pieceWidth * index},${pieceHeight} Z`;

        // Adiciona os comandos do caminho para criar as conexões do quebra-cabeça
        if (index > 0) { // Se não for a primeira peça
            d += `M ${pieceWidth * index},0 `;
            d += `S ${(pieceWidth * index) + 1.14},${pieceHeight / 2 - 10.36} `;
            d += `${(pieceWidth * index) - 5.86},${pieceHeight / 2 - 10.36} `;
            d += `S ${(pieceWidth * index) - 20.44},${pieceHeight / 2 - 21.95} `;
            d += `${(pieceWidth * index) - 20.44},${pieceHeight / 2} `;
            d += `S ${(pieceWidth * index) - 12.86},${pieceHeight / 2 + 6.6} `;
            d += `${(pieceWidth * index) - 5.86},${pieceHeight / 2 + 6.6} `;
            d += `S ${(pieceWidth * index) + 3.19},${pieceHeight - 5.04} `;
            d += `${pieceWidth * index},${pieceHeight} `;
        }
        if (index < produtos.length - 1) { // Se não for a última peça
            d += `M ${pieceWidth * (index + 1)},0 `;
            d += `S ${(pieceWidth * (index + 1)) - 0.96},${pieceHeight / 2 - 10.29} `;
            d += `${(pieceWidth * (index + 1)) + 6.04},${pieceHeight / 2 - 10.29} `;
            d += `S ${(pieceWidth * (index + 1)) + 15.07},${pieceHeight / 2 - 20.26} `;
            d += `${(pieceWidth * (index + 1)) + 15.07},${pieceHeight / 2} `;
            d += `S ${(pieceWidth * (index + 1)) + 13.04},${pieceHeight / 2 + 6.59} `;
            d += `${(pieceWidth * (index + 1)) + 6.04},${pieceHeight / 2 + 6.59} `;
            d += `S ${(pieceWidth * (index + 1)) + 3.63},${pieceHeight - 3.55} `;
            d += `${pieceWidth * (index + 1)},${pieceHeight} `;
        }

        path.setAttribute("d", d);
        path.setAttribute("fill", coresProdutos[produto] || "#FFFFFF"); // Cor padrão é branco
        path.setAttribute("stroke", coresProdutos[produto] || "#FFFFFF");
        path.setAttribute("stroke-width", "1");
        path.setAttribute("stroke-linejoin", "round");

        let text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", (pieceWidth * index + pieceWidth / 2).toString());
        text.setAttribute("y", (pieceHeight / 2 + 5).toString());
        text.setAttribute("fill", "black");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-weight", "bold");
        text.textContent = produto;

        svg.appendChild(path);
        svg.appendChild(text);

        if (index > 0) { // Não adiciona no primeiro elemento
            let btnEsquerda = document.createElementNS(svgNS, "text");
            btnEsquerda.textContent = '+';
            btnEsquerda.setAttribute("x", (pieceWidth * index - 10).toString());
            btnEsquerda.setAttribute("y", (pieceHeight / 2 + 5).toString());
            btnEsquerda.setAttribute("fill", "#000000");
            btnEsquerda.setAttribute("font-weight", "bold");
            btnEsquerda.setAttribute("text-anchor", "middle");
            btnEsquerda.setAttribute("cursor", "pointer");
            btnEsquerda.setAttribute("font-size", "20px");
            btnEsquerda.onclick = () => adicionarElemento(index, 'esquerda');
            svg.appendChild(btnEsquerda);
        }
        if (produto === '-') {
            let btnRemover = document.createElementNS(svgNS, "text");
            btnRemover.textContent = '-';
            btnRemover.setAttribute("x", (pieceWidth * index + pieceWidth / 2).toString());
            btnRemover.setAttribute("y", (pieceHeight / 2 + 5).toString());
            btnRemover.setAttribute("fill", "#202020");
            btnRemover.setAttribute("font-weight", "bold");
            btnRemover.setAttribute("text-anchor", "middle");
            btnRemover.setAttribute("cursor", "pointer");
            btnRemover.onclick = () => removerElemento(index);
            svg.appendChild(btnRemover);
        }
    });

    let container = document.querySelector(`#container-${safeVoucher}`);
    if (!container) {
        container = document.createElement("div");
        container.setAttribute("id", `container-${safeVoucher}`);
        container.classList.add('svg-container'); // Adiciona a classe svg-container para sincronização de scroll
        let label = document.createElement("label");
        label.innerHTML = `<div class='h4'><i>${nomeEspecie}</i> (<b>${voucher}</b>)</div>`;
        container.appendChild(label);
        container.style.width = "100%";
        container.style.overflowX = "auto";
        container.style.marginTop = "10px";
        container.style.marginBottom = "50px";
        container.appendChild(svg);
        document.getElementById('svgContainer').appendChild(container); // Adiciona ao contêiner principal
    } else {
        container.appendChild(svg);
    }

    syncScroll(); // Chama a função de sincronização de scroll
}

// Função para rolar até o fim do SVG
function scrollToEnd() {
    const containers = document.querySelectorAll('.svg-container');
    containers.forEach(container => {
        container.scrollLeft = container.scrollWidth;
    });
}

// Sincroniza o scroll de todos os elementos SVG
function syncScroll() {
    const containers = document.querySelectorAll('.svg-container');
    containers.forEach(container => {
        container.onscroll = function() {
            const scrollLeft = container.scrollLeft;
            containers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    otherContainer.scrollLeft = scrollLeft;
                }
            });
        };
    });
}

// Adiciona o contêiner principal ao corpo do documento
var svgPlot = document.getElementById('svgPlot');
let mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "svgContainer");
mainContainer.style.width = "100%";
mainContainer.style.overflowX = "auto";
svgPlot.appendChild(mainContainer);


const btnReset = document.getElementById('resetSVG');
btnReset.addEventListener('click', function() {
    document.getElementById('svgContainer').innerHTML = '';
});

const exportFigure = document.getElementById('exportFigure');
exportFigure.addEventListener('click', function() {
    todosSvgParaPng();
    
});

function todosSvgParaPng() {
    // Seleciona todos os SVGs gerados pela função criarSVG
    const svgs = document.querySelectorAll('svg[id^="svg-"]');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Calcula a largura e altura total necessária para todos os SVGs
    let totalWidth = 0;
    let maxHeight = 0;
    svgs.forEach(svg => {
      const svgSize = svg.getBoundingClientRect();
      totalWidth += svgSize.width;
      maxHeight = Math.max(maxHeight, svgSize.height);
    });
  
    // Define a largura e altura do canvas
    canvas.width = totalWidth;
    canvas.height = maxHeight;
  
    // Posição atual para desenhar o SVG no canvas
    let currentX = 0;
  
    // Desenha cada SVG no canvas
    svgs.forEach(svg => {
      const svgSize = svg.getBoundingClientRect();
      const img = new Image();
      const xml = new XMLSerializer().serializeToString(svg);
      const svg64 = btoa(xml);
      const b64Start = 'data:image/svg+xml;base64,';
      const image64 = b64Start + svg64;
      img.onload = function() {
        ctx.drawImage(img, currentX, 0);
        currentX += svgSize.width;
        // Verifica se todos os SVGs foram desenhados
        if (currentX >= totalWidth) {
          // Converte o canvas para uma imagem PNG
          const imagemPng = canvas.toDataURL('image/png');
          // Cria um link para download da imagem PNG
          const linkDownload = document.createElement('a');
          linkDownload.href = imagemPng;
          linkDownload.download = 'todos_svgs.png';
          document.body.appendChild(linkDownload);
          linkDownload.click();
          document.body.removeChild(linkDownload);
        }
      };
      img.src = image64;
    });
  }
  