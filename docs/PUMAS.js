var dataMitochondrial   = {};

const MitochondrialGenes = {
    "12S": ['small subunit ribosomal RNA', 's-rRNA', '12S ribosormal RNA', 'small ribosomal RNA subunit RNA', '12SrRNA', '12 ribosomal RNA', 'rrnS', '12S ribosomal RNA subunit', '12S', 'small ribosomal RNA', 'small subunit ribosormal RNA', '12 rRNA', '12 S ribosomal RNA', '12S small subunit ribosomal RNA', 'trnS', 'Product small subunit ribosomal RNA', '12S-rRNA', 'rRNA-12S', '12S ribosonal RNA', '12Srrn', '12S ribosome RNA', '12S ribsomal RNA', '12S rRNA', '12S ribosomal RNA', '12S ribosomal ribonucleic acid'],
    "16S": ['large subunit ribosomal RNA', 'l-rRNA', '16S bibosomal RNA', 'large ribosomal RNA subunit RNA', 'rrnL', '16S ribosomal RNA subunit', '16S rivbosomal RNA', 'l6S ribosomal RNA', '16S', '16S ribosamal RNA', 'large ribosomal RNA', '16S rRNA', '16 S ribosomal RNA', '16S large subunit ribosomal RNA', 'l-RNA', '16S-rRNA', '16Srrn', '16S ribosommal RNA', '16S ribosomal ribonucleic acid', '16S ribosomal RNA', '16S ribosome RNA', '16S recombinant RNA', '16S ribosomal RNA gene', '16S recombinant ribonucleic acid'],
    "ATP6": ['ATPase F0 subunit 6', 'ATP synthase F0 subunit 6', 'ATP synthase subunit 6', 'ATPase 6', 'ATP6', 'ATP synthase FO subunit 6', 'ATP synthase protein 6', 'ATPase subunits 6', 'ATP subunit 6', 'ATPase subunit-6', 'ATP synthase subunit F0 6', 'adenosine triphosphatase subunit 6', 'ATP synthase subunit-6', 'ATP sythase F0 subunit 6', 'ATPase 6 protein', 'ATP synthase 6', 'ATP synthetase F0 Subunit 6', 'ATPase subuint 6', 'ATPase sununit 6', 'ATPase6 protein', 'ATP Synthase Membrane Subunit 6', 'TP synthase F0 subunit 6', 'ATP sybthase F0 subunit 6', 'ATP6ase', 'ATP synthase A chain protein 6', 'ATP synthetase subunit 6', 'F0/F1 ATP synthase subunit 6', 'disrupted ATP synthase F0 subunit 6', 'ATPsynthase F0 subunit 6', 'F1 ATPase subunit 6', 'ATP sythase subunit 6', 'adenine triphosphatase subunit 6', 'F0-ATP synthase subunit 6', 'F0-ATP synthase subunit6', 'F0-ATPase subunit6', 'ATP 6synthase 6', 'adenosine triphosphate subunit 6', 'ATPase subunit 6', 'ATPase6', 'adenosine triphosphate synthase-6'],
    "ATP8": ['ATPase F0 subunit 8', 'ATP synthase F0 subunit 8', 'ATP synthase subunit 8', 'ATPase 8', 'ATP8', 'ATP synthase FO submit 8', 'ATPase8', 'ATP synthase protein 8', 'ATPase subunits 8', 'ATP subunit 8', 'ATPase subunit-8', 'ATP synthase subunit F0 8', 'adenosine triphosphatase subunit 8', 'ATP synthase subunit-8', 'ATP sythase F0 subunit 8', 'ATP synthase FO subunit 8', 'ATPase 8 protein', 'adenosine triphoshatase subunit 8', 'ATP synthase 8', 'ATPase subunit8', 'ATP synthetase F0 Subunit 8', 'adenosine triphosphate subunit 8', 'ATPase8 protein', 'ATP Synthase Membrane Subunit 8', 'TP synthase F0 subunit 8', 'product ATP synthase F0 subunit 8', 'ATP sybthase F0 subunit 8', 'ATP8ase', 'ATP synthetase subunit 8', 'F0/F1 ATP synthase subunit 8', 'ATPsynthase F0 subunit 8', 'F1 ATPase subunit 8', 'ATP sythase subunit 8', 'adenine triphosphatase subunit 8', 'ATP syntahse F0 subunit 8', 'F0-ATP synthase subunit 8', 'F0-ATP synthase subunit8', 'ATPase subunit 8', 'F0-ATPase subunit8', 'ATP synthase F0 subunit'],
    "COI": ['COX1', 'cytochrome c oxidase subunit 1', 'cytochrome oxidase gene', 'coxidase subunit I', 'COX', 'c oxidase subunits I', 'cytochrome-c-oxidase I', 'Cytochrome Oxidase subunit I region', 'c-oxidase subunit I', 'c oxi- dase I', 'c oxidase subunit-I', 'cytochrome oxidase I region', 'cytochrome oxydase I', 'c oxydase I', 'cytochrome-oxidase 1', 'C Oxidase Gene Subunit-I', 'C Oxidation I', 'c oxidase I subunit', 'cytochrome c oxidase I', 'Cythocrome Oxidase I', 'cytochrome oxidase I subunit', 'Citochrome Oxidase I', 'cytochromec oxidase I', 'c oxidase submit I', 'c oxidase unit I', 'c oxidate subunit I', 'cytochrome I', 'cytochome oxidase subunit I', 'cytochrome-c oxidase, subunit I', 'cytochrome b oxidase subunit I', 'cytochrome subunit I', 'cytochrome-oxidase I', 'COX-1', 'cytochromoxidase I', 'cytochrome oxidase 1', 'cytochrome oxidase subunit 1', 'cytochrome oxidase I', 'C Oxidase type I', 'cytochrome oxidase subunit I', 'cytochrome oxidase I locus', 'c oxidase subunit I sequences', 'coxidase I', 'c oxidase subunit I locus', 'Cytochrome Oxidase unit I', 'cytochrome oxidase subunits I', 'cytochrome oxidase subunit I mtDNA', 'cytochrome C oxidase subunit I', 'Markers-Cytochrome Oxidase Subunit I', 'C Oxidase, Subunit I', 'chytochrome c oxidase subunit I', 'I', 'cytochrome oxidase subunit-1', 'Cytochrome oxydase subunit 1', 'cytochrome c oxidase subunit idase subunit I', 'cytochrome c-oxidase subunit I', 'cytochrome c oxidase subunits I', 'cytchrome c oxidase subunit I', 'subunit 1 of the cytochrome c oxidase', 'cytochorome oxidase subunit I', 'COI', 'cytochrome c oxydase subunit 1', 'cytochrome oxidase1', 'COI protein', 'cyt oxidase subunit 1', 'cytochrome oxidase c subunit 1', 'cytochrome oxidase c subunit I', 'cytochrome oxydase subunit I', 'cytochrome c oxidase polypeptide I', 'cytochrome coxidase subunit I', 'cytochrome c-oxidase subunit 1', 'cytochrome c oxidase polypeptide 1', 'CO I', 'product: cytochrome c oxidase subunit I', 'cytochome c oxidase subunit 1', 'Cytochrome c oxidase subunit1', 'cytochrome coxidase subunit 1', 'cytochrome c oxidase subunit I'],
    "COII": ['COX-2', 'c oxidase subunit II gene', 'cytochrome oxidase II gene', 'cytochrome oxidase subunit II gene', 'cytochrome oxidase subunit II region', 'coxidase subunit II', 'c oxidase II gene', 'cytochrome oxidase-II', 'cytochrome c oxidase subunit 2', 'chytochrome c oxidase subunit II', 'II', 'cytochrome c oxidase subunit II', 'cytochrome oxidase subunit II', 'cytochrome oxidase subunit 2', 'cytohrome oxidase subunit II', 'cytochrome oxidase subunit-2', 'Cytochrome oxydase subunit 2', 'cytochrome c oxidase subunit idase subunit II', 'cytochrome c-oxidase subunit II', 'cytochrome c oxidase subunits II', 'cytochrome c oxidase II', 'cytochrome oxidase II', 'cytchrome c oxidase subunit II', 'subunit 2 of the cytochrome c oxidase', 'COX2', 'cytochorom oxidase subunit II', 'COII', 'cytochrome c oxydase subunit 2', 'CO2', 'cytochrome oxidase subunit2', 'COII protein', 'cyt oxidase subunit 2', 'cytochrome oxidase c subunit 2', 'cytochrome oxidase c subunit II', 'cytochrome oxydase subunit II', 'cytochrome c oxidase polypeptide II', 'cytochrome coxidase subunit II', 'cytochome oxidase II', 'cytochrome c-oxidase subunit 2', 'cytochrome c oxidase polypeptide 2', 'CO II', 'cytochome c oxidase subunit 2', 'Cytochrome c oxidase subunit2', 'cytochrome coxidase subunit 2', 'cytochome oxidase subunit 2', 'C-terminal domain of Cytochrome c Oxidase subunit II'],
    "COIII": ['cytochrome oxidase subunit III gene', 'c oxidase subunit III gene', 'COX3', 'COX 3', 'COX-3', 'c oxidase mitochondrial subunit III', 'cytochrome c oxidase subunit 3', 'cytochrome c oxidase subunit III', 'chytochrome c oxidase subunit III', 'cytochrome oxidase subunit III', 'cytochrome oxidase subunit 3', 'cytohrome oxidase subunit III', 'cyctochrome c oxidase subunit III', 'cutochrome oxidase subunit 3', 'cytochrome oxidase subunit-3', 'Cytochrome oxydase subunit 3', 'cytochrome c oxidase subunit idase subunit III', 'cytochrome c-oxidase subunit III', 'cytochrome c oxidase subunits III', 'cytochrome c oxidase III', 'cytochrome oxidase III', 'cytchrome c oxidase subunit III', 'subunit 3 of the cytochrome c oxidase', 'cytochorome oxidase subunit III', 'COIII', 'cytochrome c oxydase subunit 3', 'CO3', 'cytochrome oxidase subunit3', 'cytochrome coxidase subunit III', 'COIII protein', 'cyt oxidase subunit 3', 'cytochrome oxidase c subunit 3', 'cytochrome oxidase c subunit III', 'cytochrome oxydase subunit III', 'cytochrome co oxidase subunit III', 'cytochrome c oxidase subnunit III', 'cytochrome oxidase sununit 3', 'Cytochrome c oxidase polypeptide III', 'cytochrome C oxidase asubunit 3', 'cytochrome c oxidase sununit III', 'cytochrome c-oxidase subunit 3', 'cytochrome c oxidase polypeptide 3', 'CO III', 'cytochome c oxidase subunit 3', 'cytochrome c oxidase subunit3', 'cytochrome coxidase subunit 3'],
    "CYTB": ['Cytochrome b apoenzyme', 'apoenzyme', 'cytohrome b', 'cytochome b', 'cytochorome b', 'cytchrome b', 'cob', 'cytochrome b protein', 'Cythocrome b', 'Cytb protein', 'cytchorome b', 'CYTB', 'Cytochrome-b', 'cytbochrome b', 'apocytochrome b', 'cytochromeb', 'ctyb', 'Cyt b', 'apocytochome b', 'cytochrome b', 'cytochrome bc1'],
    "ND1": ['NADH dehydrogenase subunit 1', 'NAD dehydrogenase subunit 1', 'NADH dehydrogenase subunit-1', 'NADH denydrogenase subunit 1', 'NADH dehydrogenase 1', 'NADH dehydrogenase subunits 1', 'NADH dehydogenase subunit 1', 'NADH dehydrogenase subunit1', 'NADH dehydrogenase subunit #1', 'Subunit 1 of the NADH ubiquinone oxidoreductase complex', 'NADHsubunit 1', 'NADH dehydrogenase subnit 1', 'ND1', 'NADH dehydrogenase subunit I', 'NADH1', 'NADH1 protein', 'NADH subunit 1', 'NADH-ubiquinone oxidoreductase chain 1', 'NADH dehydrogenase, subunit 1', 'NADH-ubiquinone oxidoreductase subunit I', 'NADH 1', 'NADH dehydrogenase subumit 1', 'NADH-ubiquinone oxidoreductase subunit 1', 'NADH ubiquinone oxidoreductase subunit 1', 'nicotinamide adenine dinucleotide dehydrogenase subunit 1', 'truncated NADH dehydrogenase subunit 1', 'NADH-1', 'NADH dehdrogenase subunit 1', 'NaD1', 'NADH dehydrogynase subunit 1'],
    "ND2": ['NADH dehydrogenase subunit 2', 'NADH dehydrogenase subunit-2', '#NADH dehydrogenase subunit 2', 'NADH denydrogenase subunit 2', 'NADH dehydrogenase 2', 'NADH dehydrogenase subunits 2', 'NADH dehydrogenase subunit #2', 'subunit 2 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 2', 'NADH dehydrogenase subnit 2', 'ND2', 'NADH dehydrogenase subunit II', 'NADH2', 'NADH2 protein', 'NADH subunit 2', 'NADH-ubiquinone oxidoreductase chain 2', 'NADH dehdrogenase subnuit 2', 'NADH-ubiquinone oxidoreductase subunit II', 'NADH 2', 'NADH dehydrogenase subumit 2', 'NADH-ubiquinone oxidoreductase subunit 2', 'NADH ubiquinone oxidoreductase subunit 2', 'NADH dehydrognase subunit II', 'nicotinamide adenine dinucleotide dehydrogenase subunit 2', 'NADH dehydrogenase subunit2'],
    "ND3": ['NADH dehydrogenase subunit 3', 'NAD dehydrogenase subunit 3', 'NADH dehydrogenase subunit-3', 'NADH denydrogenase subunit 3', 'NADH dehydrogenase 3', 'NADH dehydrogenase subunits 3', 'subunit 3 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 3', 'NADH dehydrogenase subnit 3', 'ND3', 'NADH3', 'NADH dehydrogenase subunit III', 'NADH3 protein', 'NADH subunit 3', 'NADH-ubiquinone oxidoreductase chain 3', 'ND3 NADH dehydrogenase subunit 3', 'NADH dehydrogenasesubunit 3', 'NADH dehydrogenase, subunit 3', 'NADH-ubiquinone oxidoreductase subunit III', 'truncated NADH dehydrogenase subunit 3', 'NADH 3', 'NADH dehydrogenase subumit 3', 'NADH-ubiquinone oxidoreductase subunit 3', 'NADH ubiquinone oxidoreductase subunit 3', 'NADH dehydrogenase subunit3'],
    "ND4": ['NADH dehydrogenase subunit 4', 'NAD dehydrogenase subunit 4', 'NADH hehydrogenase subunit 4', 'NADH dehrogenase subunit 4', 'NADH dehydrogenase subunit-4', 'NADH denydrogenase subunit 4', 'NADH dehydrogenase 4', 'NADH dehydrogenase subunits 4', 'NADH dehydrosenase subunit 4', 'subunit 4 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 4', 'NADH dehydrogenase subnit 4', 'ND4', 'NADH dehyodrogenase subunit 4', 'NADH4', 'NADH dehydrogenase subunit4', 'NADH dehydrogenase subunit IV', 'NADH4 protein', 'NADH subunit 4', 'NADH dehydrogenase sunbunit 4', 'NADH-ubiquinone oxidoreductase chain 4', 'NADH-ubiquinone oxidoreductase subunit IV', 'NADH 4', 'NADH dehydrogenase subumit 4', 'NADH-ubiquinone oxidoreductase subunit 4', 'NADH ubiquinone oxidoreductase subunit 4', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4', 'truncated NADH dehydrogenase subunit 4'],
    "ND4L": ['NADH dehydrogenase subunit 4L', 'NADH dehydrogenase subunit-4L', 'NADH denydrogenase subunit 4L', 'NADH dehydrogenase 4L', 'ND4L', 'NADH dehydrogenase subunits 4L', 'subunit ND4L of the NADH ubiquinone oxidoreductase complex', 'NADH4L protein', 'NADH dehydrogenase subnit 4L', 'NADH4L', 'NADH dehydrogenase subunit 4 L', 'NADH dehydrogenase subunit IV L', 'NADH subunit 4L', 'NADH-ubiquinone oxidoreductase chain 4L', 'NADH-ubiquinone oxidoreductase subunit 4L', 'NADH dehydrogenase, subunit 4L (complex I)', 'NADH 4L', 'NADH dehydrogenase subumit 4L', 'HADH dehydrogenase 4L', 'NADH dehydrogenase subujnit 4L', 'NADH ubiquinone oxidoreductase subunit 4L', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4L', 'NADH dehydrogenase subunit4L'],
    "ND5": ['NADH dehydrogenase subunit 5', 'NAD dehydrogenase subunit 5', 'NADH dehrogenase subunit 5', 'NADH dehydrogenase subunit-5', 'NADH hehydrogenase subunit 5', 'NADH denydrogenase subunit 5', 'NADH dehydrogenase 5', 'ND5', 'NADH dehydrogenase subunits 5', 'NADH hydrogenase subunit 5', 'subunit 5 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 5', 'NADH dehydrogenase subnit 5', 'NADH dehydrodenase subunit 5', 'NADH5', 'HADA dehydrogenase subunit 5', 'NADH dehydrogenase subunit V', 'NADH5 protein', 'NADH subunit 5', 'NADH dehydrogenase subunit 5-0', 'NADH-ubiquinone oxidoreductase chain 5', 'NADH-ubiquinone oxidoreductase subunit V', 'NADH dehydrogenase, subunit 5', 'NADH dehydrogenase, subunit 5 complex I', 'NADH 5', 'NADH dehydrogenase subumit 5', 'NADH-ubiquinone oxidoreductase subunit 5', 'NADH ubiquinone oxidoreductase subunit 5', 'nicotinamide adenine dinucleotide dehydrogenase subunit 5', 'truncated NADH dehydrogenase subunit 5', 'NADH dehydrogenase subunit5', 'NADH dehydroghenase subunit 5'],
    "ND6": ['NADH dehydrogenase subunit 6', 'NAD dehydrogenase subunit 6', 'NADH dehydrogenase subunit-6', 'NADH denydrogenase subunit 6', 'NADH dehydrogenase 6', 'ND6', 'NADH dehydrogenase subunits 6', 'subunit 6 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 6', 'NADH dehydrogenase subnit 6', 'NADH6', 'NADH dehydrogenase subunit VI', 'NADH6 protein', 'NADH subunit 6', 'truncated NADH dehydrogenase subunit 6', 'NADH dehygrogenase subunit 6', 'NADH dehydrogenease subunit 6', 'NADH-ubiquinone oxidoreductase chain 6', 'NADH dehydrogenase, subunit 6', 'NADH dsehydrogenase subunit 6', 'NADH-ubiquinone oxidoreductase subunit VI', 'NADH 6', 'NADH dehydrogenase subumit 6', 'NADH-ubiquinone oxidoreductase subunit 6', 'NADH ubiquinone oxidoreductase subunit 6', 'nicotinamide adenine dinucleotide dehydrogenase subunit 6', 'NADH dehydrogenase subunit6'],
    "Control Region": ['Control region', 'non-coding region', 'putative control region', 'control region 1', 'control region ii', 'control region i', 'control region 2', 'noncoding region', 'pseudo control region', 'cr', 'control region (d-loop)', 'd-loop control region', 'similar to control region', 'non coding region', 'conrol region', 'region: control region', 'a+t-rich region', 'putative control region 2', 'd-loop region (= control reagion)', 'pseudo contorl region', 'a+t rich region', 'c-rich region', 'largest non-coding region', 'd-loop', 'd loop', 'control region cr', 'the control region', 'control region c-rich sequence', 'control region coretas sequence', 'putative d-loop/control region', 'd-loop containing region', 'a+t rich', 'at-rich region'],
};
    

var colorMitochondrial = {
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
 

async function getXML(ids, genelist, typeGenome, drop) {
    const _typeGenome = typeGenome;
    let progress = 0;

    function updateProgressBar(current, total) {
        const progressBar = document.getElementById('progressBar');
        const percentage = (current / total) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('aria-valuenow', percentage);
        progressBar.textContent = `${percentage.toFixed(2)}%`;
    }

    const geneOrders = new Set(); // Conjunto para armazenar as ordens de genes únicas

    const promises = ids.map(async (vouchers) => {
        const url = `https://www.ncbi.nlm.nih.gov/sviewer/viewer.cgi?tool=portal&save=file&log$=seqview&db=nuccore&report=gbc_xml&id=${vouchers}&conwithfeat=on&withparts=on&show-sequence=on&hide-cdd=on`;
        try {
            const response = await fetch(url);
            const data = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const features = xml.querySelectorAll("INSDFeature");
            const genes = [];
            const strands = [];
            const lengths = [];
            const sequence = xml.querySelector("INSDSeq_sequence").textContent;
            const genesSequence = {};
            const pseudoGenes = [];

            const geneInfo = {}; // Objeto para armazenar informações sobre os genes para detecção de pseudogenes

            features.forEach(feature => {
                if (genelist.includes(feature.querySelector("INSDFeature_key").textContent)) {
                    const qualifiers = feature.querySelectorAll("INSDFeature_quals > INSDQualifier");
                    const start = parseInt(feature.querySelector("INSDInterval > INSDInterval_from").textContent) - 1;
                    const end = parseInt(feature.querySelector("INSDInterval > INSDInterval_to").textContent);

                    const strand = start > end ? '-' : '+';
                    const length = end - start + 1;

                    let geneName = null;

                    qualifiers.forEach(qualifier => {
                        if (qualifier.querySelector("INSDQualifier_name").textContent === "product") {
                            geneName = qualifier.querySelector("INSDQualifier_value").textContent;
                            if (_typeGenome === 'MitochondrialGenes') {
                                for (const key in MitochondrialGenes) {
                                    if (MitochondrialGenes[key].includes(geneName)) {
                                        geneName = key;
                                        break;
                                    }
                                }
                            }
                            genes.push(geneName);
                        }
                    });
                    if (geneName) {
                        if (start < end) {
                            genesSequence[geneName] = sequence.substring(start, end).toUpperCase();
                        } else {
                            genesSequence[geneName] = sequence.substring(start + 1, end - 1).toUpperCase();
                        }
                    }

                    if (geneName) {
                        // Adiciona informações do gene ao geneInfo
                        if (!geneInfo[geneName]) {
                            geneInfo[geneName] = [];
                        }
                        geneInfo[geneName].push({ length, start, end, strand, geneName });
                    }

                    strands.push(strand);
                    lengths.push(length);
                }
            });

            // Verificar pseudogenes
            Object.keys(geneInfo).forEach(gene => {
                if (geneInfo[gene].length > 1 && !['tRNA-Ser', 'tRNA-Leu'].includes(gene)) {
                    // Ordenar por comprimento e considerar o menor como pseudogene
                    geneInfo[gene].sort((a, b) => a.length - b.length);
                    const pseudoGeneInfo = geneInfo[gene][0]; // O menor gene é o pseudogene
                    pseudoGenes.push({
                        gene: gene,
                        pseudoGeneInfo: pseudoGeneInfo
                    });
                }
            });

            if (drop === "YES") {
                // Construir a ordem dos genes com a strand se for "-"
                var geneOrderStr = genes.map((gene, index) => {
                    if (gene.startsWith('tRNA')) {
                        var _gene = gene.replace('tRNA-', '');
                    } else {
                        var _gene = gene;
                    }
                    return strands[index] === '-' ? `-${_gene}` : _gene;
                }).join(',');

                // Verificar se a ordem já existe
                if (geneOrders.has(geneOrderStr)) {
                    return; // Se a ordem já existe, não adicionar novamente
                } else {
                    geneOrders.add(geneOrderStr); // Adicionar a nova ordem ao conjunto
                }
            }

            const species = Array.from(xml.querySelectorAll("INSDSeq_organism")).map(org => org.textContent);
            const vouchersArr = Array.from(xml.querySelectorAll("INSDSeq_accession-version")).map(voucher => voucher.textContent);

            const dataEntry = {
                species: species,
                vouchers: vouchersArr,
                genes: genes,
                strands: strands,
                length: lengths,
                sequence: sequence,
                genesSequence: genesSequence,
                genesOrder: geneOrderStr,
                pseudoGenes: pseudoGenes // Adiciona a lista de pseudogenes ao objeto de dados
            };

            if (_typeGenome === 'MitochondrialGenes') {
                dataMitochondrial[vouchers] = dataEntry;
            }
        } catch (error) {
            console.error(error);
        }
        progress++;
        updateProgressBar(progress, ids.length);
    });

    await Promise.all(promises);
}








function criarSVG(geneStart, nomeEspecie, voucher, genes, strands, length, pseudoGenes) {
    const pieceWidth = 125;
    const pieceHeight = pieceWidth / 2;
    const tRNAWidth = pieceWidth / 1.25;
    const safeVoucher = String(voucher).replace(/\./g, '_');

    const preferidos = [geneStart];
    let startGene = preferidos.find(gene => genes.includes(gene));
    if (startGene) {
        const indexInicio = genes.indexOf(startGene);
        genes = [...genes.slice(indexInicio), ...genes.slice(0, indexInicio)];
        strands = [...strands.slice(indexInicio), ...strands.slice(0, indexInicio)];
    }

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

    const svgWidth = genes.reduce((acc, produto) => acc + (produto.startsWith('tRNA') ? tRNAWidth : pieceWidth), 0);
    
    svg.setAttribute("width", svgWidth.toString());
    svg.setAttribute("height", "150");
    svg.setAttribute("viewBox", `0 50 ${svgWidth} 150`);

    function adicionarElemento(index, lado) {
        genes.splice(lado === 'esquerda' ? index : index + 1, 0, '-');
        strands.splice(lado === 'esquerda' ? index : index + 1, 0, '+');
        criarSVG(geneStart, nomeEspecie, voucher, genes, strands, length, pseudoGenes);
    }

    function removerElemento(index) {
        genes.splice(index, 1);
        strands.splice(index, 1);
        criarSVG(geneStart, nomeEspecie, voucher, genes, strands, length, pseudoGenes);
    }

    // Adiciona nome da espécie acima das peças do quebra-cabeça
    let textEspecie = document.createElementNS(svgNS, "text");
    textEspecie.setAttribute("x", "10");
    textEspecie.setAttribute("y", "70");
    textEspecie.setAttribute("fill", "black");
    textEspecie.setAttribute("font-size", "20px");

    let italicEspecie = document.createElementNS(svgNS, "tspan");
    italicEspecie.setAttribute("font-style", "italic");
    italicEspecie.textContent = `${nomeEspecie} `;

    //let icon = document.createElementNS(svgNS, "path");
    //icon.setAttribute("d", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z");
    //icon.setAttribute("x", "10");
    //icon.setAttribute("y", "70");
    //icon.setAttribute("fill", "black");
    //icon.setAttribute("stroke", "black");
    //icon.setAttribute("stroke-width", "1");
    //icon.setAttribute("stroke-linejoin", "round");
    //icon.setAttribute("data-bs-toggle", "tooltip");
    //icon.setAttribute("data-bs-placement", "bottom");
    //icon.setAttribute("data-bs-custom-class", "custom-tooltip");
    //icon.setAttribute("data-bs-html", "true");
    //icon.setAttribute("title", `View Genome Diagram`);


    let boldVoucher = document.createElementNS(svgNS, "tspan");
    boldVoucher.setAttribute("font-weight", "bold");
    boldVoucher.innerHTML = `
        (<a href="https://www.ncbi.nlm.nih.gov/nuccore/${voucher}" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-html="true" title="View in GenBank">${voucher}</a>) - View Genome Diagram
    `;

    textEspecie.appendChild(italicEspecie);
    textEspecie.appendChild(boldVoucher);
    //textEspecie.appendChild(icon);
    
    // Adiciona o botão com tooltip
    //const btn = document.createElementNS(svgNS, "text");
    //btn.textContent = "View Genome Diagram";
    //btn.setAttribute("x", "100");
    //btn.setAttribute("y", "70");
    //btn.setAttribute("fill", "blue");
    //btn.setAttribute("font-size", "15px");
    //btn.setAttribute("cursor", "pointer");
    //btn.setAttribute("data-bs-toggle", "tooltip");
    //btn.setAttribute("title", "View Genome Diagram");
    //btn.onclick = () => window.open(`https://www.ncbi.nlm.nih.gov/nuccore/${voucher}`, '_blank');

    //textEspecie.appendChild(btn);

    svg.appendChild(textEspecie);

    let currentX = 0;

    genes.forEach((produto, index) => {
        const isTRNA = produto.startsWith('tRNA');
        const pieceW = isTRNA ? tRNAWidth : pieceWidth;
        const pieceH = pieceHeight;

        let path = document.createElementNS(svgNS, "path");
        let d = `M ${currentX},80 
                 L ${currentX + pieceW},80 
                 L ${currentX + pieceW},${80 + pieceH} 
                 L ${currentX},${80 + pieceH} Z`;

        if (index > 0) { // Se não for a primeira peça
            d += `M ${currentX},80 
                  S ${currentX + 1.14},${80 + pieceH / 2 - 10.36} 
                  ${currentX - 5.86},${80 + pieceH / 2 - 10.36} 
                  S ${currentX - 20.44},${80 + pieceH / 2 - 21.95} 
                  ${currentX - 20.44},${80 + pieceH / 2} 
                  S ${currentX - 12.86},${80 + pieceH / 2 + 6.6} 
                  ${currentX - 5.86},${80 + pieceH / 2 + 6.6} 
                  S ${currentX + 3.19},${80 + pieceH - 5.04} 
                  ${currentX},${80 + pieceH} `;
        }

        if (index < genes.length - 1) { // Se não for a última peça
            d += `M ${currentX + pieceW},80 
                  S ${currentX + pieceW - 0.96},${80 + pieceH / 2 - 10.29} 
                  ${currentX + pieceW + 6.04},${80 + pieceH / 2 - 10.29} 
                  S ${currentX + pieceW + 15.07},${80 + pieceH / 2 - 20.26} 
                  ${currentX + pieceW + 15.07},${80 + pieceH / 2} 
                  S ${currentX + pieceW + 13.04},${80 + pieceH / 2 + 6.59} 
                  ${currentX + pieceW + 6.04},${80 + pieceH / 2 + 6.59} 
                  S ${currentX + pieceW + 3.63},${80 + pieceH - 3.55} 
                  ${currentX + pieceW},${80 + pieceH} `;
        }

        path.setAttribute("d", d);
        path.setAttribute("fill", colorMitochondrial[produto] || "#FFFFFF");
        path.setAttribute("stroke", colorMitochondrial[produto] || "#FFFFFF");
        path.setAttribute("stroke-width", "1");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute("class", "gene-path");
        path.setAttribute("data-bs-toggle", "tooltip");
        path.setAttribute("data-bs-placement", "bottom");
        path.setAttribute("data-bs-custom-class", "custom-tooltip");
        path.setAttribute("data-bs-html", "true");
        let len = length[index].toString().replace('-', '');
        path.setAttribute("title", `Gene: <b>${produto}</b><br>Length: <b>${len} bp</b><br>Strand: ${strands[index] === '+' ? '<b>light</b>' : '<b>heavy</b>'}`);

        let text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", (currentX + pieceW / 2).toString());
        text.setAttribute("y", (80 + pieceH / 2).toString());
        text.setAttribute("fill", "#000000");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-weight", "bold");
        //text.setAttribute("alignment-baseline", "central");
        text.setAttribute("font-size", "15px");
        //text.setAttribute("class", "gene-text");
        //text.setAttribute("data-bs-toggle", "tooltip");
        //text.setAttribute("data-bs-placement", "bottom");
        //text.setAttribute("data-bs-custom-class", "custom-tooltip");
        //text.setAttribute("data-bs-html", "true");
        //text.setAttribute("title", `Gene: <b>${produto}</b><br>Length: <b>${length[index]} bp</b><br>Strand: ${strands[index] === '+' ? '<b>light</b>' : '<b>heavy</b>'}`);
        text.textContent = isTRNA ? produto.replace('tRNA-', '') : produto;

        svg.appendChild(path);
        svg.appendChild(text);

        // Verifica se é pseudogene e adiciona asterisco abaixo do nome
        const isPseudoGene = pseudoGenes.some(pg => pg.gene === produto);
        if (isPseudoGene) {
            let asterisk = document.createElementNS(svgNS, "text");
            asterisk.setAttribute("x", (currentX + pieceW / 2).toString());
            asterisk.setAttribute("y", '175'); // Ajuste a posição vertical conforme necessário
            asterisk.setAttribute("fill", "#202020");
            asterisk.setAttribute("text-anchor", "middle");
            asterisk.setAttribute("font-size", "25px");
            asterisk.textContent = "*";
            svg.appendChild(asterisk);
    }

        let line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", currentX.toString());
        line.setAttribute("x2", (currentX + pieceW).toString());
        line.setAttribute("stroke", "black");

        if (strands[index] === '+') {
            line.setAttribute("y1", "80");
            line.setAttribute("y2", "80");
            line.setAttribute("stroke-width", "5");
        } else {
            line.setAttribute("y1", (80 + pieceH).toString());
            line.setAttribute("y2", (80 + pieceH).toString());
            line.setAttribute("stroke-width", "5");
        }

        svg.appendChild(line);

        if (index > 0) { // Não adiciona no primeiro elemento
            let btnEsquerda = document.createElementNS(svgNS, "text");
            btnEsquerda.textContent = '+';
            btnEsquerda.setAttribute("x", (currentX - 10).toString());
            btnEsquerda.setAttribute("y", "115");
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
            btnRemover.setAttribute("x", (currentX + pieceW / 2).toString());
            btnRemover.setAttribute("y", "115");
            btnRemover.setAttribute("fill", "#202020");
            btnRemover.setAttribute("font-weight", "bold");
            btnRemover.setAttribute("text-anchor", "middle");
            btnRemover.setAttribute("cursor", "pointer");
            btnRemover.onclick = () => removerElemento(index);
            svg.appendChild(btnRemover);
        }

        currentX += pieceW;
    });

    let container = document.querySelector(`#container-${safeVoucher}`);
    if (!container) {
        container = document.createElement("div");
        container.setAttribute("id", `container-${safeVoucher}`);
        container.classList.add('svg-container');
        container.style.width = "100%";
        container.style.overflowX = "auto";
        container.style.marginTop = "2.5px";
        container.style.marginBottom = "2.5px";
        container.appendChild(svg);
        document.getElementById('svgContainer').appendChild(container);
    } else {
        container.appendChild(svg);
    }

    syncScroll();

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
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




function ListGenes(object) {
    const data = object;
    const _genesToFasta = $('#genesToFasta'); // Usando jQuery para selecionar o elemento
    const cdsGenes = new Set();
    const rrnaGenes = new Set();
    const trnaGenes = new Set();

    // Definindo as listas de genes para cada categoria
    const cdsList   = ['ATP6', 'ATP8', 'COI', 'COII', 'COIII', 'CYTB', 'ND1', 'ND2', 'ND3', 'ND4', 'ND4L', 'ND5', 'ND6'].sort();
    const rrnaList  = ['12S', '16S'].sort();
    const trnaList  = ['tRNA-Ala', 'tRNA-Arg', 'tRNA-Asn', 'tRNA-Asp', 'tRNA-Cys', 'tRNA-Gln', 'tRNA-Glu', 'tRNA-Gly', 'tRNA-His', 'tRNA-Ile', 'tRNA-Leu', 'tRNA-Lys', 'tRNA-Met', 'tRNA-Phe', 'tRNA-Pro', 'tRNA-Ser', 'tRNA-Thr', 'tRNA-Trp', 'tRNA-Tyr', 'tRNA-Val'].sort();

    _genesToFasta.empty();
    _genesToFasta.append($('<option>').text('Choose a gene').attr('value', 'NaN'));

    const mt = Object.keys(data);
    mt.forEach((id) => {
        data[id].genes.forEach((gene) => {
            if (cdsList.includes(gene)) {
                cdsGenes.add(gene);
            } else if (rrnaList.includes(gene)) {
                rrnaGenes.add(gene);
            } else if (trnaList.includes(gene)) {
                trnaGenes.add(gene);
            }
        });
    });

    function addOptions(groupName, geneSet) {
        if (geneSet.size > 0) {
            _genesToFasta.append($('<option>').text(`-- ${groupName} --`).attr('disabled', 'disabled'));
            Array.from(geneSet).sort().forEach((gene) => {
                _genesToFasta.append($('<option>').text(gene).attr('value', gene));
            });
        }
    }
    addOptions('CDS', cdsGenes);
    addOptions('rRNAs', rrnaGenes);
    addOptions('tRNAs', trnaGenes);
}




var svgPlot = document.getElementById('svgPlot');
    let mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "svgContainer");
    mainContainer.style.width = "100%";
    mainContainer.style.overflowX = "auto";
    svgPlot.appendChild(mainContainer);



function showResults(object){
    ListGenes(object);
    const _Results = document.getElementById('PUMASResults');
    _Results.style.display = 'block';
}



function mergeSVGsIntoPNG(svgElements, outputWidth, outputHeight) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    let scale = 1;
    if (svgElements.length <= 10) {
        scale = 5;
    } else if (svgElements.length >= 11 && svgElements.length <= 20) {
        scale = 4;
    } else if (svgElements.length >= 21 && svgElements.length <= 30) {
        scale = 3;
    } else if (svgElements.length >= 31 && svgElements.length <= 40) {
        scale = 2;
    } else if (svgElements.length >= 41 && svgElements.length <= 50) {
        scale = 1.5;
    } else if (svgElements.length >= 51) {
        scale = 1;
    }

    // Aumentar a resolução
    canvas.width = outputWidth * scale;
    canvas.height = outputHeight * scale;
    context.scale(scale, scale);

    // Preencher o fundo com branco
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

    let loadedSVGs = 0;

    svgElements.forEach((svgElement, index) => {
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const img = new Image();

        img.onload = () => {
            context.drawImage(img, 0, index * svgElement.clientHeight); // Ajustar o posicionamento conforme necessário
            loadedSVGs++;
            if (loadedSVGs === svgElements.length) {
                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'PUMAS.png';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }, 'image/png');
            }
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    });
}


function mergeSVGsIntoSingleSVG(svgElements) {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const combinedSVG = document.createElementNS(svgNamespace, "svg");

    let yOffset = 0;
    const maxWidth = Math.max(...svgElements.map(svg => svg.viewBox.baseVal.width));
    const totalHeight = svgElements.reduce((sum, svg) => sum + svg.viewBox.baseVal.height, 0);

    combinedSVG.setAttribute("width", maxWidth.toString());
    combinedSVG.setAttribute("height", totalHeight.toString());
    combinedSVG.setAttribute("xmlns", svgNamespace);

    svgElements.forEach(svgElement => {
        const clonedSVG = svgElement.cloneNode(true);
        const gElement = document.createElementNS(svgNamespace, "g");
        gElement.setAttribute("transform", `translate(0, ${yOffset})`);

        yOffset += svgElement.viewBox.baseVal.height; // Adjust the positioning as needed

        gElement.appendChild(clonedSVG);
        combinedSVG.appendChild(gElement);
    });

    return combinedSVG;
}

function downloadCombinedSVG(svgElements) {
    const combinedSVG = mergeSVGsIntoSingleSVG(svgElements);
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(combinedSVG);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PUMAS.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function mergeSVGsIntoPDF(svgElements) {
    const { jsPDF } = window.jspdf;

    // Calcular a largura máxima e a altura total dos SVGs
    const maxWidth = Math.max(...svgElements.map(svg => svg.clientWidth));
    const svgHeights = svgElements.map(svg => svg.clientHeight);
    const maxHeightPerSVG = Math.max(...svgHeights);

    // Configuração do PDF em modo paisagem
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [maxWidth, 10 * maxHeightPerSVG] // Ajusta a altura da página para acomodar 10 SVGs
    });

    let currentY = 0;
    let svgCount = 0;
    const scale = 5; // Aumentar a escala para melhorar a qualidade

    for (let i = 0; i < svgElements.length; i++) {
        if (svgCount === 10) {
            pdf.addPage();
            currentY = 0;
            svgCount = 0;
        }

        const svgElement = svgElements[i];
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));

        await new Promise((resolve) => {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = svgElement.clientWidth * scale;
                canvas.height = svgElement.clientHeight * scale;
                context.scale(scale, scale);
                context.drawImage(img, 0, 0);

                const imgData = canvas.toDataURL('image/png');
                const xPos = 0;
                const yPos = currentY;

                pdf.addImage(imgData, 'PNG', xPos, yPos, canvas.width / scale, canvas.height / scale);
                currentY += canvas.height / scale;
                svgCount++;
                resolve();
            };
        });
    }

    pdf.save('PUMAS.pdf');
}





