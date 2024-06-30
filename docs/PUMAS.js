var dataGenomes = {};

const MitochondrialGenes = {
    "-":        [],
    "OL":       [],
    "OH":       [],
    "12S":      ['small subunit ribosomal RNA', 's-rRNA', '12S ribosormal RNA', 'small ribosomal RNA subunit RNA', '12SrRNA', '12 ribosomal RNA', 'rrnS', '12S ribosomal RNA subunit', '12S', 'small ribosomal RNA', 'small subunit ribosormal RNA', '12 rRNA', '12 S ribosomal RNA', '12S small subunit ribosomal RNA', 'trnS', 'Product small subunit ribosomal RNA', '12S-rRNA', 'rRNA-12S', '12S ribosonal RNA', '12Srrn', '12S ribosome RNA', '12S ribsomal RNA', '12S rRNA', '12S ribosomal RNA', '12S ribosomal ribonucleic acid'],
    "16S":      ['large subunit ribosomal RNA', 'l-rRNA', '16S bibosomal RNA', 'large ribosomal RNA subunit RNA', 'rrnL', '16S ribosomal RNA subunit', '16S rivbosomal RNA', 'l6S ribosomal RNA', '16S', '16S ribosamal RNA', 'large ribosomal RNA', '16S rRNA', '16 S ribosomal RNA', '16S large subunit ribosomal RNA', 'l-RNA', '16S-rRNA', '16Srrn', '16S ribosommal RNA', '16S ribosomal ribonucleic acid', '16S ribosomal RNA', '16S ribosome RNA', '16S recombinant RNA', '16S ribosomal RNA gene', '16S recombinant ribonucleic acid'],
    "ATP6":     ['ATPase F0 subunit 6', 'ATP synthase F0 subunit 6', 'ATP synthase subunit 6', 'ATPase 6', 'ATP6', 'ATP synthase FO subunit 6', 'ATP synthase protein 6', 'ATPase subunits 6', 'ATP subunit 6', 'ATPase subunit-6', 'ATP synthase subunit F0 6', 'adenosine triphosphatase subunit 6', 'ATP synthase subunit-6', 'ATP sythase F0 subunit 6', 'ATPase 6 protein', 'ATP synthase 6', 'ATP synthetase F0 Subunit 6', 'ATPase subuint 6', 'ATPase sununit 6', 'ATPase6 protein', 'ATP Synthase Membrane Subunit 6', 'TP synthase F0 subunit 6', 'ATP sybthase F0 subunit 6', 'ATP6ase', 'ATP synthase A chain protein 6', 'ATP synthetase subunit 6', 'F0/F1 ATP synthase subunit 6', 'disrupted ATP synthase F0 subunit 6', 'ATPsynthase F0 subunit 6', 'F1 ATPase subunit 6', 'ATP sythase subunit 6', 'adenine triphosphatase subunit 6', 'F0-ATP synthase subunit 6', 'F0-ATP synthase subunit6', 'F0-ATPase subunit6', 'ATP 6synthase 6', 'adenosine triphosphate subunit 6', 'ATPase subunit 6', 'ATPase6', 'adenosine triphosphate synthase-6'],
    "ATP8":     ['ATPase F0 subunit 8', 'ATP synthase F0 subunit 8', 'ATP synthase subunit 8', 'ATPase 8', 'ATP8', 'ATP synthase FO submit 8', 'ATPase8', 'ATP synthase protein 8', 'ATPase subunits 8', 'ATP subunit 8', 'ATPase subunit-8', 'ATP synthase subunit F0 8', 'adenosine triphosphatase subunit 8', 'ATP synthase subunit-8', 'ATP sythase F0 subunit 8', 'ATP synthase FO subunit 8', 'ATPase 8 protein', 'adenosine triphoshatase subunit 8', 'ATP synthase 8', 'ATPase subunit8', 'ATP synthetase F0 Subunit 8', 'adenosine triphosphate subunit 8', 'ATPase8 protein', 'ATP Synthase Membrane Subunit 8', 'TP synthase F0 subunit 8', 'product ATP synthase F0 subunit 8', 'ATP sybthase F0 subunit 8', 'ATP8ase', 'ATP synthetase subunit 8', 'F0/F1 ATP synthase subunit 8', 'ATPsynthase F0 subunit 8', 'F1 ATPase subunit 8', 'ATP sythase subunit 8', 'adenine triphosphatase subunit 8', 'ATP syntahse F0 subunit 8', 'F0-ATP synthase subunit 8', 'F0-ATP synthase subunit8', 'ATPase subunit 8', 'F0-ATPase subunit8', 'ATP synthase F0 subunit'],
    "COI":      ['COX1', 'cytochrome c oxidase subunit 1', 'cytochrome oxidase gene', 'coxidase subunit I', 'COX', 'c oxidase subunits I', 'cytochrome-c-oxidase I', 'Cytochrome Oxidase subunit I region', 'c-oxidase subunit I', 'c oxi- dase I', 'c oxidase subunit-I', 'cytochrome oxidase I region', 'cytochrome oxydase I', 'c oxydase I', 'cytochrome-oxidase 1', 'C Oxidase Gene Subunit-I', 'C Oxidation I', 'c oxidase I subunit', 'cytochrome c oxidase I', 'Cythocrome Oxidase I', 'cytochrome oxidase I subunit', 'Citochrome Oxidase I', 'cytochromec oxidase I', 'c oxidase submit I', 'c oxidase unit I', 'c oxidate subunit I', 'cytochrome I', 'cytochome oxidase subunit I', 'cytochrome-c oxidase, subunit I', 'cytochrome b oxidase subunit I', 'cytochrome subunit I', 'cytochrome-oxidase I', 'COX-1', 'cytochromoxidase I', 'cytochrome oxidase 1', 'cytochrome oxidase subunit 1', 'cytochrome oxidase I', 'C Oxidase type I', 'cytochrome oxidase subunit I', 'cytochrome oxidase I locus', 'c oxidase subunit I sequences', 'coxidase I', 'c oxidase subunit I locus', 'Cytochrome Oxidase unit I', 'cytochrome oxidase subunits I', 'cytochrome oxidase subunit I mtDNA', 'cytochrome C oxidase subunit I', 'Markers-Cytochrome Oxidase Subunit I', 'C Oxidase, Subunit I', 'chytochrome c oxidase subunit I', 'I', 'cytochrome oxidase subunit-1', 'Cytochrome oxydase subunit 1', 'cytochrome c oxidase subunit idase subunit I', 'cytochrome c-oxidase subunit I', 'cytochrome c oxidase subunits I', 'cytchrome c oxidase subunit I', 'subunit 1 of the cytochrome c oxidase', 'cytochorome oxidase subunit I', 'COI', 'cytochrome c oxydase subunit 1', 'cytochrome oxidase1', 'COI protein', 'cyt oxidase subunit 1', 'cytochrome oxidase c subunit 1', 'cytochrome oxidase c subunit I', 'cytochrome oxydase subunit I', 'cytochrome c oxidase polypeptide I', 'cytochrome coxidase subunit I', 'cytochrome c-oxidase subunit 1', 'cytochrome c oxidase polypeptide 1', 'CO I', 'product: cytochrome c oxidase subunit I', 'cytochome c oxidase subunit 1', 'Cytochrome c oxidase subunit1', 'cytochrome coxidase subunit 1', 'cytochrome c oxidase subunit I'],
    "COII":     ['COX-2', 'c oxidase subunit II gene', 'cytochrome oxidase II gene', 'cytochrome oxidase subunit II gene', 'cytochrome oxidase subunit II region', 'coxidase subunit II', 'c oxidase II gene', 'cytochrome oxidase-II', 'cytochrome c oxidase subunit 2', 'chytochrome c oxidase subunit II', 'II', 'cytochrome c oxidase subunit II', 'cytochrome oxidase subunit II', 'cytochrome oxidase subunit 2', 'cytohrome oxidase subunit II', 'cytochrome oxidase subunit-2', 'Cytochrome oxydase subunit 2', 'cytochrome c oxidase subunit idase subunit II', 'cytochrome c-oxidase subunit II', 'cytochrome c oxidase subunits II', 'cytochrome c oxidase II', 'cytochrome oxidase II', 'cytchrome c oxidase subunit II', 'subunit 2 of the cytochrome c oxidase', 'COX2', 'cytochorom oxidase subunit II', 'COII', 'cytochrome c oxydase subunit 2', 'CO2', 'cytochrome oxidase subunit2', 'COII protein', 'cyt oxidase subunit 2', 'cytochrome oxidase c subunit 2', 'cytochrome oxidase c subunit II', 'cytochrome oxydase subunit II', 'cytochrome c oxidase polypeptide II', 'cytochrome coxidase subunit II', 'cytochome oxidase II', 'cytochrome c-oxidase subunit 2', 'cytochrome c oxidase polypeptide 2', 'CO II', 'cytochome c oxidase subunit 2', 'Cytochrome c oxidase subunit2', 'cytochrome coxidase subunit 2', 'cytochome oxidase subunit 2', 'C-terminal domain of Cytochrome c Oxidase subunit II'],
    "COIII":    ['cytochrome oxidase subunit III gene', 'c oxidase subunit III gene', 'COX3', 'COX 3', 'COX-3', 'c oxidase mitochondrial subunit III', 'cytochrome c oxidase subunit 3', 'cytochrome c oxidase subunit III', 'chytochrome c oxidase subunit III', 'cytochrome oxidase subunit III', 'cytochrome oxidase subunit 3', 'cytohrome oxidase subunit III', 'cyctochrome c oxidase subunit III', 'cutochrome oxidase subunit 3', 'cytochrome oxidase subunit-3', 'Cytochrome oxydase subunit 3', 'cytochrome c oxidase subunit idase subunit III', 'cytochrome c-oxidase subunit III', 'cytochrome c oxidase subunits III', 'cytochrome c oxidase III', 'cytochrome oxidase III', 'cytchrome c oxidase subunit III', 'subunit 3 of the cytochrome c oxidase', 'cytochorome oxidase subunit III', 'COIII', 'cytochrome c oxydase subunit 3', 'CO3', 'cytochrome oxidase subunit3', 'cytochrome coxidase subunit III', 'COIII protein', 'cyt oxidase subunit 3', 'cytochrome oxidase c subunit 3', 'cytochrome oxidase c subunit III', 'cytochrome oxydase subunit III', 'cytochrome co oxidase subunit III', 'cytochrome c oxidase subnunit III', 'cytochrome oxidase sununit 3', 'Cytochrome c oxidase polypeptide III', 'cytochrome C oxidase asubunit 3', 'cytochrome c oxidase sununit III', 'cytochrome c-oxidase subunit 3', 'cytochrome c oxidase polypeptide 3', 'CO III', 'cytochome c oxidase subunit 3', 'cytochrome c oxidase subunit3', 'cytochrome coxidase subunit 3'],
    "CYTB":     ['Cytochrome b apoenzyme', 'apoenzyme', 'cytohrome b', 'cytochome b', 'cytochorome b', 'cytchrome b', 'cob', 'cytochrome b protein', 'Cythocrome b', 'Cytb protein', 'cytchorome b', 'CYTB', 'Cytochrome-b', 'cytbochrome b', 'apocytochrome b', 'cytochromeb', 'ctyb', 'Cyt b', 'apocytochome b', 'cytochrome b', 'cytochrome bc1'],
    "ND1":      ['NADH dehydrogenase subunit 1', 'NAD dehydrogenase subunit 1', 'NADH dehydrogenase subunit-1', 'NADH denydrogenase subunit 1', 'NADH dehydrogenase 1', 'NADH dehydrogenase subunits 1', 'NADH dehydogenase subunit 1', 'NADH dehydrogenase subunit1', 'NADH dehydrogenase subunit #1', 'Subunit 1 of the NADH ubiquinone oxidoreductase complex', 'NADHsubunit 1', 'NADH dehydrogenase subnit 1', 'ND1', 'NADH dehydrogenase subunit I', 'NADH1', 'NADH1 protein', 'NADH subunit 1', 'NADH-ubiquinone oxidoreductase chain 1', 'NADH dehydrogenase, subunit 1', 'NADH-ubiquinone oxidoreductase subunit I', 'NADH 1', 'NADH dehydrogenase subumit 1', 'NADH-ubiquinone oxidoreductase subunit 1', 'NADH ubiquinone oxidoreductase subunit 1', 'nicotinamide adenine dinucleotide dehydrogenase subunit 1', 'truncated NADH dehydrogenase subunit 1', 'NADH-1', 'NADH dehdrogenase subunit 1', 'NaD1', 'NADH dehydrogynase subunit 1'],
    "ND2":      ['NADH dehydrogenase subunit 2', 'NADH dehydrogenase subunit-2', '#NADH dehydrogenase subunit 2', 'NADH denydrogenase subunit 2', 'NADH dehydrogenase 2', 'NADH dehydrogenase subunits 2', 'NADH dehydrogenase subunit #2', 'subunit 2 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 2', 'NADH dehydrogenase subnit 2', 'ND2', 'NADH dehydrogenase subunit II', 'NADH2', 'NADH2 protein', 'NADH subunit 2', 'NADH-ubiquinone oxidoreductase chain 2', 'NADH dehdrogenase subnuit 2', 'NADH-ubiquinone oxidoreductase subunit II', 'NADH 2', 'NADH dehydrogenase subumit 2', 'NADH-ubiquinone oxidoreductase subunit 2', 'NADH ubiquinone oxidoreductase subunit 2', 'NADH dehydrognase subunit II', 'nicotinamide adenine dinucleotide dehydrogenase subunit 2', 'NADH dehydrogenase subunit2'],
    "ND3":      ['NADH dehydrogenase subunit 3', 'NAD dehydrogenase subunit 3', 'NADH dehydrogenase subunit-3', 'NADH denydrogenase subunit 3', 'NADH dehydrogenase 3', 'NADH dehydrogenase subunits 3', 'subunit 3 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 3', 'NADH dehydrogenase subnit 3', 'ND3', 'NADH3', 'NADH dehydrogenase subunit III', 'NADH3 protein', 'NADH subunit 3', 'NADH-ubiquinone oxidoreductase chain 3', 'ND3 NADH dehydrogenase subunit 3', 'NADH dehydrogenasesubunit 3', 'NADH dehydrogenase, subunit 3', 'NADH-ubiquinone oxidoreductase subunit III', 'truncated NADH dehydrogenase subunit 3', 'NADH 3', 'NADH dehydrogenase subumit 3', 'NADH-ubiquinone oxidoreductase subunit 3', 'NADH ubiquinone oxidoreductase subunit 3', 'NADH dehydrogenase subunit3'],
    "ND4":      ['NADH dehydrogenase subunit 4', 'NAD dehydrogenase subunit 4', 'NADH hehydrogenase subunit 4', 'NADH dehrogenase subunit 4', 'NADH dehydrogenase subunit-4', 'NADH denydrogenase subunit 4', 'NADH dehydrogenase 4', 'NADH dehydrogenase subunits 4', 'NADH dehydrosenase subunit 4', 'subunit 4 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 4', 'NADH dehydrogenase subnit 4', 'ND4', 'NADH dehyodrogenase subunit 4', 'NADH4', 'NADH dehydrogenase subunit4', 'NADH dehydrogenase subunit IV', 'NADH4 protein', 'NADH subunit 4', 'NADH dehydrogenase sunbunit 4', 'NADH-ubiquinone oxidoreductase chain 4', 'NADH-ubiquinone oxidoreductase subunit IV', 'NADH 4', 'NADH dehydrogenase subumit 4', 'NADH-ubiquinone oxidoreductase subunit 4', 'NADH ubiquinone oxidoreductase subunit 4', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4', 'truncated NADH dehydrogenase subunit 4'],
    "ND4L":     ['NADH dehydrogenase subunit 4L', 'NADH dehydrogenase subunit-4L', 'NADH denydrogenase subunit 4L', 'NADH dehydrogenase 4L', 'ND4L', 'NADH dehydrogenase subunits 4L', 'subunit ND4L of the NADH ubiquinone oxidoreductase complex', 'NADH4L protein', 'NADH dehydrogenase subnit 4L', 'NADH4L', 'NADH dehydrogenase subunit 4 L', 'NADH dehydrogenase subunit IV L', 'NADH subunit 4L', 'NADH-ubiquinone oxidoreductase chain 4L', 'NADH-ubiquinone oxidoreductase subunit 4L', 'NADH dehydrogenase, subunit 4L (complex I)', 'NADH 4L', 'NADH dehydrogenase subumit 4L', 'HADH dehydrogenase 4L', 'NADH dehydrogenase subujnit 4L', 'NADH ubiquinone oxidoreductase subunit 4L', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4L', 'NADH dehydrogenase subunit4L'],
    "ND5":      ['NADH dehydrogenase subunit 5', 'NAD dehydrogenase subunit 5', 'NADH dehrogenase subunit 5', 'NADH dehydrogenase subunit-5', 'NADH hehydrogenase subunit 5', 'NADH denydrogenase subunit 5', 'NADH dehydrogenase 5', 'ND5', 'NADH dehydrogenase subunits 5', 'NADH hydrogenase subunit 5', 'subunit 5 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 5', 'NADH dehydrogenase subnit 5', 'NADH dehydrodenase subunit 5', 'NADH5', 'HADA dehydrogenase subunit 5', 'NADH dehydrogenase subunit V', 'NADH5 protein', 'NADH subunit 5', 'NADH dehydrogenase subunit 5-0', 'NADH-ubiquinone oxidoreductase chain 5', 'NADH-ubiquinone oxidoreductase subunit V', 'NADH dehydrogenase, subunit 5', 'NADH dehydrogenase, subunit 5 complex I', 'NADH 5', 'NADH dehydrogenase subumit 5', 'NADH-ubiquinone oxidoreductase subunit 5', 'NADH ubiquinone oxidoreductase subunit 5', 'nicotinamide adenine dinucleotide dehydrogenase subunit 5', 'truncated NADH dehydrogenase subunit 5', 'NADH dehydrogenase subunit5', 'NADH dehydroghenase subunit 5'],
    "ND6":      ['NADH dehydrogenase subunit 6', 'NAD dehydrogenase subunit 6', 'NADH dehydrogenase subunit-6', 'NADH denydrogenase subunit 6', 'NADH dehydrogenase 6', 'ND6', 'NADH dehydrogenase subunits 6', 'subunit 6 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 6', 'NADH dehydrogenase subnit 6', 'NADH6', 'NADH dehydrogenase subunit VI', 'NADH6 protein', 'NADH subunit 6', 'truncated NADH dehydrogenase subunit 6', 'NADH dehygrogenase subunit 6', 'NADH dehydrogenease subunit 6', 'NADH-ubiquinone oxidoreductase chain 6', 'NADH dehydrogenase, subunit 6', 'NADH dsehydrogenase subunit 6', 'NADH-ubiquinone oxidoreductase subunit VI', 'NADH 6', 'NADH dehydrogenase subumit 6', 'NADH-ubiquinone oxidoreductase subunit 6', 'NADH ubiquinone oxidoreductase subunit 6', 'nicotinamide adenine dinucleotide dehydrogenase subunit 6', 'NADH dehydrogenase subunit6'],
    "CR":       ['Control region', 'non-coding region', 'putative control region', 'control region 1', 'control region ii', 'control region i', 'control region 2', 'noncoding region', 'pseudo control region', 'cr', 'control region (d-loop)', 'd-loop control region', 'similar to control region', 'non coding region', 'conrol region', 'region: control region', 'a+t-rich region', 'putative control region 2', 'd-loop region (= control reagion)', 'pseudo contorl region', 'a+t rich region', 'c-rich region', 'largest non-coding region', 'd-loop', 'd loop', 'control region cr', 'the control region', 'control region c-rich sequence', 'control region coretas sequence', 'putative d-loop/control region', 'd-loop containing region', 'a+t rich', 'at-rich region'],
};

const ChloroplastGenes = {
    "accD":     ['acetyl-CoA carboxylase subunit beta', 'acetyl-CoA carboxylase carboxyltransferase beta', 'acetyl-CoA carboxylase, carboxyl transferase subunit beta', 'acetyl-CoA carboxylase carboxyl transferase subunit beta', 'acetyl-CoA carboxylase carboxyltransferase subunit beta', 'acetyl-CoA carboxylase carboxyl transferase beta', 'Acetyl-CoA carboxylase carboxyltransferase beta subunit', 'carboxytransferase beta subunit', 'acetyl-CoA carboxylase, carboxyl transferasesubunit beta', 'acetyl-coenzyme A carboxylase carboxyl', 'acetyl-CoA carboxylase carboxyltransferase beta subunit protein', 'acetyl-CoA carboxyltransferase beta subunit', 'acetyl-coenzyme A carboxylase carboxyltransferase subunit beta', 'Acetyl-CoA carboxylase carboxyl transferase beta subunit', 'acetyl-coenzyme A carboxylase carboxyl transferase subunit beta', 'acetyl-CoA carboxylase carboxyl transferase betasubunit', 'acetylCoA carboxylase, carboxyl transferase subunit beta', 'acetyl-CoA carboxlyase carboxyltransferase beta subunit', 'Acetyl-coenzyme A carboxylase carboxyl transferasesubunit beta', 'acetyl-CoA caboxylase beta subunit', 'Acetyl-CoA carboxylase beta subunit', 'accD protein', 'acetyl-CoA carboxytransferase subunit beta', 'acetyl-CoA carboxylase carboxyltransferase beta#bunit', 'acetyl-CoA carboxylase carbosyltransferase beta subunit', 'acetyl-coenzyme A carboxylase carboxyl transferase subunit beta, chloroplastic', 'acetyl-coenzyme A carboxylase beta subunit', 'acetyl-CoA carboxyltransferase subunit beta', 'cetyl-coenzyme A carboxylase carboxyl transferase subunit beta', 'accD', 'AccD; acetyl-CoA carboxylase beta subunit', 'beta-carboxyltransferase subunit', 'Acetyl-CoA carboxylasecarboxyl transferase beta subunit', 'Acetyl-CoAcarboxylase carboxyl transferase beta subunit', 'acetyl-CoA carboxylase 1', 'Acetyl-CoA carboxylase subunit', 'beta subunit of acetyl-CoA carboxylase carboxytransferase', 'Acetyl-o A carboxylase carboxyl transferase beta subunit', "'acetyl-CoA carboxylase carboxyltransferase beta", 'Acetyle-CoA carboxylase beta subunit', 'acetyl-CoAcarboxylase carboxyltransferase beta subunit', 'acetyl-CoA carboxylase arboxyltransferase beta subunit', 'truncated acetyl-CoA carboxylase beta subunit', 'acetyl- CoAcarboxylasecarboxyltransferasebetasubunit', 'acetyl-CoA carboxylase', 'acetyl-CoA carboxylase carboxyl transferase', 'acetyl-CoA carboxylase carboxyl transferase subunit', 'Acetyl-CoA carboxylase carboxyltransferase betasubunit', 'acetyl-CoA carboxylase carboxy l transferase beta subunit', 'acetyl-coenzyme A decarboxylase', 'acetyl-carboxylase beta subunit', 'putative acetyl-coenzyme A carboxylase carboxyl transferase subunit beta-like protein', 'cetyl-CoA carboxylase carboxyltransferase beta subunit', 'acetyl-CoA carboxylase carboxytransferase beta subunit', 'acetyl-CoA carb oxylase carboxyl transferase beta', 'Acetyl-CoA carboxylase carboxyltransferase subuni t beta', 'carboxytransferase beta subuni', 'NiTa acetyl-CoA carboxylase beta subunit-like protein', 'acetyl-CoA carboxylase beta subunit-like protein', 'acetyl CoA carboxylase', 'acetyl CoA carboxylase beta subunit', 'beta-carboxyl transferase subunit of acetyl-CoA carboxylase', 'acetyl-CoA carboxylase beta subuni', 'acetyl-CoA carboxylase-D'],
    "atpA":     ['CF1 subunit alpha', 'ATP synthase alpha chain', 'ATP synthase CF1 subunit alpha', 'ATPase alpha subunit', 'ATP synthase CF1 alpha chain', 'ATP synthase alpha subunit', 'ATP synthase F0 subunit A', 'ATP synthase subunit alpha', 'ATP systhase CF1 alpha subunit', 'atpA', 'ATP synthase CF1 alpha', 'ATPsynthaseCF1 alpha subunit', 'ATP synthase CF1, subunit alpha', 'CF1 alpha subunit', 'AT Psynthase CF1 alpha subunit', 'atpA protein', 'ATP synthase CF1 alph a subunit', 'ATPsynthase CF1 alpha subunit', 'ATP synthase CF 1 subunit alpha', 'ATP synthase CF1alpha subunit', 'AtpA; ATP synthase CF1 alpha subunit', 'CF1 alpha subunit of ATP synthase', 'ATP synthase subunit CF1 alpha subunit', 'ATP synthase CF1 alpha protein', 'H+-ATPase alpha subunit', 'ATPase subunit alpha', 'ATP synthase subunit CF1 alpha', 'ATP synthase subunit alpha, chloroplastic (EC:7.1 .2.2)', 'ATP synthase subunit alpha subunit', 'ATP-synthase CF1 alpha subunit', 'putative ATP synthase CF1 alpha subunit', 'ATP Synthase CF1 alpha subunit', 'F1-ATPase alpha-subunit'],
    "atpB":     ['CF1 subunit beta', 'ATP synthase beta chain', 'ATP synthase CF1 subunit beta', 'ATPase beta subunit', 'ATP synthase beta subunit', 'ATP synthase CF1 beta chain', 'ATP synthase F0 subunit B', 'ATP synthase subunit beta', 'ATP synthaes CF11 beta subunit', 'ATP synthase CF1beta subunit', 'atpB', 'ATPsynthaseCF1betasubunit', 'ATP synthase CF1, subunit beta', 'F-type H+/Na+-transporting ATPase subunit beta', 'ATPsynthase CF1 beta subunit', 'atpB protein', 'ATPase beta chain', 'ATP synthase CF 1 subunit beta', 'AtpB; ATP synthase CF1 beta subunit', 'CF1 beta subunit of ATP synthase', 'ATP synthase CF1 betas ubunit', 'ATP synthase subunit CF1 beta subunit', 'ATP synthase CF1 beta protein', 'ATP syntase CF1 beta subunit', 'H+-ATP synthase subunit B', 'H+-ATPase beta subunit', 'ATP synthase cf1 beta subunit', 'CF1 beta subunit', 'ATP synthase subunit beta, chloroplastic (EC:7.1. 2.2)', 'ATP synthase CF1 beta subuni', 'ATP-synthase CF1 beta subunit'],
    "atpE":     ['CF1 subunit epsilon', 'ATP synthase CF1 epsilon chain', 'ATP synthase CF1 subunit epsilon', 'atp synthase CF1 epsilon subunit', 'ATPase epsilon subunit', 'ATP synthase CF1 psilon subunit', 'ATP synthase F0 subunit E', 'ATP synthase F0 complex c subunit', 'ATP synthase subunit epsilon', 'ATP synthase epcilon subunit', 'ATP synthase FF1 epsilon subunit', 'atpE', 'ATPsynthaseCF1epsilonsubunit', 'ATP synthase CF1epsilon subunit', 'F-type H+-transporting ATPase subunit epsilon', 'ATP synthase CF1 epsilon subuni', 'ATPsynthase CF1 epsilon subunit', 'atpE protein', 'H(+)-transporting ATP synthase', 'ATP synthase CF 1 subunit epsilon', 'AtpE; ATP synthase CF1 epsilon subunit', 'CF1 epsilon subunit of ATP synthase', 'ATP synthase subunit CF1 epsilon subunit', 'atp synthase subunit', 'ATP synthase CF1 epsilon subunit protein', 'ATP synthase CF1 epsilon protein', 'ATP syntase CF1 epsilon subunit', 'ATP Synthase epsilon subunit', 'H+-ATP synthase subunit E', 'ATP synthase, F0 complex, c subunit', 'H+-ATPase epsilon subunit', 'ATP f0 C subunit', 'ATP synthase CF1', 'CF1 epsilon subunit', 'ATP synthase epsilon chain, chloroplastic', 'ATP-synthase CF1 epsilon subunit'],
    "atpF":     ['ATP synthase CF0 subunitI', 'CF0 subunit I', 'ATP synthase CF0 B chain', 'ATP synthase CF0 B subunit subunit I', 'ATPase I subunit', 'ATP systhase CF0 B subunit', 'F0F1 ATP synthase subunit B', 'ATP synthase CF0 B chain subunit I', 'ATP synthase I subunit', 'ATP synthase F0 subunit F', 'ATP synthase subunit b', 'ATP synthase CFO B subunit I', 'atpF', 'ATP synthase CF0 subunit', 'ATP synthase CFO subunit I', 'ATPsynthaseCF0subunitI', 'synthase CF0 B chain', 'ATP synthase CF 0 subunit I', "'ATP synthase CF0 B subunit", 'ATP synthase CF0 B subunit I', 'ATP systhase CFO B subunit', 'ATPsynthase CF0 subunit I', 'atp synthase CF0 subunit I', 'atpF protein', 'ATPAse subunit I', 'AtpF; ATP synthase CF0 B subunit', 'ATP synthase CFO B subunit', 'ATP synthase CF0 F chain', 'CF0 subunit I of ATP synthase', 'ATP synthase CF0 subunit I; ATP synthase CF0 B subunit', 'ATP synthase CF0 subunit I protein', 'ATP synthase CF0 B protein', 'ATP synthase subunit I', 'ATP syntase CF0 subunit I', 'H+-ATPase I subunit', 'ATP synthase cf0 b subunit', 'synthase CF0 subunit I', 'ATP synthase CF0 B subunit (subunit I)', 'ATP synthase subunit CF0 I', 'ATP synthase CF0 subunit b', 'ATP synthase subunit b, chloroplastic', 'ATP-synthase CF0 subunit I', 'putative 23S ribosomal RNA', 'ATP systhase CF0 subunit I'],
    "atpH":     ['ATP synthase CF0 subunit III', 'ATP synthase CF0 subunitIII', 'CF0 subunit III', 'ATP synthase CF0 C chain', 'ATP synthase CF0 C subunit subunit III', 'atp synthase CF0 C subunit', 'ATPase III subunit', 'ATP systhase CF0 C subunit', 'ATP synthase subunit c', 'ATP synthase CF0 C chain subunit III', 'ATP synthase III subunit', 'ATP synthase F0 subunit H', 'ATP synthase CFO C subunit III', 'ATP systhase CF0 C chain', 'atpAse subunit III', 'atpH', 'ATP synthase CFO subunit III', 'ATP synthase CFO subunit II', 'ATP synthase CFO C subunit', 'ATPsynthaseCF0subunitIII', 'ATP synthase CF0 A subunit III', "'ATP synthase CF0 C subunit", 'ATP systhase CFO C chain', 'ATP synthase CF0, subunit C', 'ATP systhase CFO C subunit', 'ATPsynthase CF0 subunit III', 'atp synthase CF0 C subunit III', 'atpH protein', 'ATP synthase subunit delta', 'ATP synthase F0 subunit C', 'ATPase III subunit; ATP synthase CF0 C chain', 'CF0 subunit III of ATP synthase', 'ATP synthase CF 0 subunit III', 'AtpH; ATP synthase CF0 C subunit', 'ATP synthase CF0 Csubunit III', 'ATP synthase subunit CF0 subunit III', 'ATP synthase CF0 subunit III; ATP synthase CF0 C subunit', 'ATP synthase CF0 C protein', 'ATP synthase subunit III', 'ATP syntase CF0 subunit III', 'ATP synthase synthase CF0 subunit III', 'ATP synthase CF0 C', 'H+-ATPase III subunit', 'ATP synthase CF1 subunit III', 'ATP synthase CF0 III', 'H+-ATPase subunit CF0III', 'ATP synthase CF0 C subunit (subunit III)', 'ATP synthase subunit CF0 III', 'ATP synthase subunit c, chloroplastic', 'ATP synthase CF0 subunit c', 'F-ATPase subunit c', "ATP synthase CF0 subunit III'", 'ATP-synthase CF0 subunit III', 'ATP systhase CF0 subunit III'],
    "atpI":     ['ATP synthase CF0 subunit IV', 'ATP synthase CF0 subunitIV', 'ATPase subunit IV', 'ATP synthase CFO A subunit', 'CF0 subunit IV', 'ATP synthase CF0 A chain', 'ATP synthase CF0 A subunit subunit IV', 'ATPase a subunit', 'ATP synthase CF0 A chain subunit IV', 'ATPase synthase IV subunit', 'ATP synthase F0 subunit I', 'ATP synthase subunit a', 'ATP synthase CFO A subunit IV', 'atpI', 'ATPase IV subunit', 'ATP synthase CFO subunit IV', 'ATPsynthaseCF0subunitIV', 'ATP synthase CFU A chain', 'ATP synthase CF0, subunit A', 'ATP synthase CFU A subunit', 'ATPsynthase CF0 subunit IV', 'atp synthase CF0 A subunit IV', 'atpI protein', 'ATP synthase protein I', 'ATP synthase, membrane-bound accessory factor', 'ATPase IV subunit; ATP synthase CF0 A chain', 'ATP synthase CF0 subunit IV protein', 'AtpI; ATP synthase CF0 A subunit', 'ATP synthase IV subunit', 'ATP synthase FO sector subunit a', 'ATPase sunthase IV subunit', 'ATP synthase CF0 subunit IV1', 'ATP synthaseCF0 subunit IV', 'CF0 subunit IV of ATP synthase', 'ATP synthase subunit CF0 subunit IV', 'ATP synthase CF0 subunit IV; ATP synthase CF0 A subunit', "ATP synthase CF0 subunit IV'", 'ATPase a subunit IV', 'ATP synthase CF0 A protein', 'ATP synthase subunit IV', 'ATP syntase CF0 subunit IV', 'ATP synthase synthase CF0 subunit IV', 'H+-ATPase IV subunit', 'ATP synthase CF1 subunit IV', 'H+-ATPase a subunit', 'ATP synthase cf0 a subunit', 'ATPase subunit a', 'H+-ATPase subunit CF0IV', 'ATP synthase CF0 A subunit (subunit IV)', 'ATP synthase subunit CF0 IV', 'ATP synthase CF0 subunit a', 'ATP synthase subunit a, chloroplastic', 'ATP-synthase CF0 subunit IV'],
    "ccsA":     ['cytochrome c heme attachment protein', 'cytochrome cheme attachment protein', 'heme attachment to plastid cytochrome c', 'cytochrome c biogenesis/heme attachment protein', 'cytchrome c heme attachment protein', 'putative cytochrome-c synthesis associated protein', 'cytochrome c-type biogenesis protein CcsA', 'cytochrome c biogenetis protein', 'cytochrome c biogenesis protein', 'cytochrome c biogenesis protein ycf5', 'cytochromec biogenesis protein', 'c-type cytochrome synthesis protein', 'ccsA', 'cytochromecheme attachment protein', 'cytochrome c biosis protein', 'ccsA protein', 'cytochrome c hemeatt achment protein', 'cytochrome c biogenesis protein ccsA', 'CcsA; cytochrome c biogenesis protein', 'hypothetical chloroplast RF52', 'ycf5, cytochrome c biogenesis protein', "cytochrome c biogenesis protein'", 'c-type cytochrome synthesis', 'c-type cytochrome heme-attachment protein', 'cytochrome c boogenesis protein', 'cytochrome biogenesis protein C', 'cytochrome C biogenesis protein', 'CosA', 'cytochrome c heme-attachment protein', 'heme attachment protein', 'c-type cytochrome biogenesis protein', 'cytochrome c biogenesis protein (Ycf5)', 'cytochrome c biosynthesis protein', 'protein involved in cytochrome c biogenesis'],
    "cemA":     ['chloroplast envelope membrane protein', 'envelope membrane protein', 'envelope membrane carbon uptake protein', 'CemA', 'chloroplast envelope protein', 'putative heme-binding protein', 'heme-binding protein', 'envelope membrane carbone uptake protein', 'chloroplast envelope protein Ycf10', 'potential heme-binding protein', 'envelop membrane protein', 'putative hemebinding protein', 'cemA protein', 'chloroplast envelope membrane carbon uptake protein', 'CemA; envelope membrane protein', 'envolope membrane protein', 'chloroplast envelopemem braneprotein', 'chloroplast envelope', 'envelope membrane protein1', 'chloroplast enveloppe membrane protein', 'cloroplast envelope membrane protein', 'chloroplast membrane envelope protein', 'chloroplast envelop emembrane protein', 'envelopeme mbrane protein', 'chloroplast membrane protein A', 'envelope membrane protein, chloroplastic'],
    "chlB":     ['photochlorophyllide reductase subunit B', 'protochlorophyllide reductase ChlB subunit', 'protochlorophyllide reductase subunit B', 'chlB', 'protochlorophyllide reductase 58 kDa chain', 'protochlorophyllide reductase 58kDa chain', 'protochlorophyllide reductase Chl Bsubunit', 'light-independent protochlorophyllide reductase subunit B', 'photochlorophyllide reductase ChlB subunit', 'ferredoxin:protochlorophyllide reductase ATP-dependent subunit B', 'ferredoxin:protochlorophyllide reductase (ATP-dependent) subunit B', 'photochlorophyllide reductase subunit ChlB', 'ChlB subunit of protochlorophyllide reductase', 'protochlorophyllide reductase 58kDa subunit', 'protochlorophyllide reductase 58 kDa subunit'],
    "chlL":     ['ChlL', 'photochlorophyllide reductase subunit L', 'protochlorophyllide reductase ATP-binding subunit', 'protochlorophyllide reductase iron proteinsubunit', 'protochlorophyllide reductase Fe protein', 'protochlorophyllide reductase subunit L', 'protochlorophyllide reductase iron protein subunit', 'light-independent protochlorophyllide reductase subunit L', 'light-independent protochlorophyllide reductase iron-sulfur ATP-binding protein', 'protochlorophyllide reductase ATP-binding', 'photochlorophyllide reductase subunit ChlL', 'ferredoxin:protochlorophyllide reductase ATP-dependent iron-sulfur ATP-binding protein', 'ferredoxin:protochlorophyllide reductase (ATP-dependent) iron-sulfur ATP-binding protein', 'light-independent protochlorophyllide reductase iron protein subunit ChlL', 'ATP-binding subunit of protochlorophyllide reductase', 'photochlorophyllide reductase ATP-binding subunit', 'Protochlorophyllide reductase subunit', 'tochlorophyllide reductase subunit L', 'protochlorophillide reductase subunit ChlL'],
    "chlN":     ['photochlorophyllide reductase subunit N', 'protochlorophyllide reductase ChlN subunit', 'protochlorophyllide reductase subunit N', 'chlN', 'protochlorophyllide reductase 48 kDa chain', 'light-independent protochlorophyllide reductase subunit N', 'protochlorophillide reductase subunit ChlN', 'ferredoxin:protochlorophyllide reductase ATP-dependent subunit N', 'ferredoxin:protochlorophyllide reductase (ATP-dependent) subunit N', 'photochlorophyllide reductase subunit', 'protochlorophyllide reductase subunit chlN', 'ChlN subunit of protochlorophyllide reductase', 'protochlorophyllide reductase 46kDa chain', 'protochlorophyllide reductase 46kDa subunit', 'photochlorophyllide reductase subunit ChlN', 'protochlorophyllide reductase 48 kDa subunit'],
    "clpP":     ['clp protease proteolytic subunit', 'ATP-dependent Clp protease proteolytic subunit', 'ClpP', 'ATP-depedent Clp protease proteolytic subunit', 'ATP-dependent protease subunit', 'clpP-like protease', 'Clp protease catalytic subunit', 'ATP-dependent protease proteolytic subunit', 'clpP protease proteolytic subunit', 'ATP-dependent protease proteolytic subunit exon3', 'clp protease proteolytic subunit protein', 'ATP-dependent protease; catalytic subunit', 'ATP-dependent Clp protease proteolytic', 'ATP-dependent Clp protease proteolytic subunit 3', 'clpprotease proteolytic subunit', 'Clp (chloroplast)', 'ATP-dependent Clp protease', 'ATP dependent clp protease proteolytic subunit', 'clpP protein', 'truncated clp protease proteolytic subunit', 'RNA ATP-dependent Clp protease proteolytic subunit', 'caseinolytic mitochondrial matrix peptidase proteolytic subunit', 'ATP-dependent protease', 'acetyl-CoA ATP-dependent Clp protease proteolytic subunit', 'ATP-dependent Clp protease proteolytic subunit like, bacteria origin', 'ATP-dependent protease proteolytic subuni', 'proteolytic subunit 2 of clp protease', 'ATP-dependent protease catalytic subunit', 'proteolytic subunit of the ATP-dependent Clp protease', 'Clp protease subunit', 'ATP-dependent Clp protease subunit', 'clp protMsse proteolytic subunit', 'ATP-depenent Clp protease proteolytic subunit', 'Chloroplastic ATP-dependent Clp protease proteoly tic subunit 1', 'ATP-dependent Clp protease proteolytic subunit 2'],
    "clpP1":    ['ATP-dependent Clp protease proteolytic subunit1', 'ATP-dependent Clp protease proteolytic subunit 1', 'ClpP1', 'caseinolytic protease P1', 'clpP1 protein', 'caseinolytic peptidase P1', 'ClpP1; ATP-dependent Clp protease proteolytic subunit', 'chloroplastic ATP-dependent Clp protease proteolytic subunit 1', 'Clp protease proteolytic subunit1'],
    "cysA":     ['sulfate ABC transporter', 'cysA', 'sulfate ABC transporter protein', 'fulfate ABC transporter', 'sulfate transport ATP-binding protein', 'sulfate/thiosulfate import ATP-binding protein CysA', 'probable transport protein'],
    "cysT":     ['CysT', 'permease protein CysT', 'sulfate transport protein', 'probable sulfate transport system permease protein cysT', 'sulfate/thiosulfate import ATP-binding protein CysT', 'sulfate transport'],
    "ftsH":     ['cell division protein', 'ATP-dependent zinc metalloprotease FtsH'],
    "infA":     ['translation initiation factor 1', 'translational initiation factor 1', 'InfA', 'initiation factor 1', 'translation initiation factor IF-1', 'Translational initiation factor', 'translation initaion factor IF-1', 'Translation initiation factor IF', 'translation alinitiation factor1', 'translational initiation factor IF1', 'Translational initiation factor IF-1', 'translationalinitiationfactor1', 'locus_tagal initiation factor 1', 'acetolactate synthase 3 regulatory subunit', 'translation initiation factor A', "initiation factor 1'", 'translational initiation protein 1', 'product#translation initiation factor 1', 'Translation initiation factor IF-1, chloroplastic', 'Protein chain initiation factor IF1', 'translation initiation factor l', 'translational initiation factor 1 protein', 'initial transcription factor', 'protein subunit initiation factor IF-1', 'translation initiation factor IF1', 'translation initiation factor', 'translation alinitiation factor 1', 'translational initiation factor1', 'initiation factor a'],
    "lhbA":     ['LhbA', 'LhbA protein', 'LHC of PSII associated factor', 'no product string in file', 'LhbA(protein_id=AFQ99059.1)', 'LbhA', 'LHC of PSII associated factor 1', 'photosystem II LHC complex subunit'],
    "matK":     ['maturase-like protein', 'maturase K', 'intron maturase', 'maturase', 'truncated maturase K', 'matuease K', 'matK-PSX', 'matK', 'meturase K', 'matK protein', 'RNA maturase', 'trnK-UUU', 'intron maturase K', 'megakaryocyte-associated tyrosine kinase', 'MatK; intron maturase K', 'maturase for trnK intron', 'maturaseK', 'maturase within trnK intron', 'putative maturase', 'maturase K gene'],
    "ndhA":     ['NADH-plastoquinone oxidoreductase subunit 1', 'NADH dehydrogenase subunit 1', 'NADH dehydrogenase subunit A', 'NADH-plastoquinone oxidoreductase subunit A', 'NdhA', 'NADH-plastoquinone oxidoreductase chain 1', 'NADH dehydrogenase ND1', 'NADH dehydrogenase ND1 subunit', 'NAD(P)H-quinone oxidoreductase subunit 1', 'NAD(P)H-quinone oxidoreductase chain 1', 'NADPH dehydrogenase complex A', 'NADH dehyrogenase subunit 1', 'NADH plastoquinone oxidoreductase subunit 1', 'ndhA protein', 'NAD(P)H-quinone oxidoreductase subunit 1, chloroplastic', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit A', 'truncated NADH-plastoquinone oxidoreductase subunit 1', 'subunit 1 of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit 1', 'NADH-plastoquinone oxidoreductase protein 1', 'NADH-plastoquinoneoxidoreductase subunit 1', 'hypothetical protein (chloroplast)', 'NDH subunit 1', 'NADH-plastoquinoneo xidoreductase subunit 1', 'NdhA; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit A'],
    "ndhB":     ['NADH-plastoquinone oxidoreductase subunit 2', 'NADH dehydrogenase subunit 2', 'NADH dehydrogenase subunit B', 'NdhB', 'NADH-plastoquinone oxidoreductase chain 2', 'NADH dehydrogenase ND2 subunit', 'NADH dehydrogenase ND2', 'NAD(P)H-quinone oxidoreductase subunit 2', 'NAD(P)H-quinone oxidoreductase chain 2', 'NADH-plastoquinoneoxidoreductase subunit 2', 'NAD(P)H-quinone oxidoreductase subunit 2 A', 'NADPH dehydrogenase complex B', 'NADH plastoquinone oxidoreductase subunit 2', 'NADH-plastoquinone oxidoreductase subunit2', 'ndhB protein', 'NADH-plastoquinone oxidoreductase subunit B', 'NADH dehydrogenase subunit II', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit B', 'NAD(P)H-quinone oxidoreductase', 'NADH-plastopuinone oxidoreductase subunit 2', 'NAHD-plastoquinone oxidoreductase subunit 2', 'subunit 2 of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit 2', 'NADH-plastoquinone oxidoreductase protein 2', 'truncated NADH dehydrogenase subunit 2', 'NADH dehydrogenease subunit 2', 'NADH dehudrogenase ND2 subunit', 'NADH-plastoquinoneo xidoreductase subunit 2', 'NAD(P)H-quinone oxidoreductase subunit 2, chloroplastic', 'NAD(P)H-quinone oxidoreductase subunit 2 B, chlor oplastic', 'NADH-plastoquinone oxidoreductase subunit B 1', 'NdhB; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit B', 'NADH-plastoquinone oxidoreductase subunit B 2'],
    "ndhC":     ['NADH-plastoquinone oxidoreductase subunit 3', 'NADH dehydrogenase subunit 3', 'NADH dehydrogenase subunit C', 'NADH-plastoquinone oxidoreductase subunit C', 'NdhC', 'NADH-plastoquinone oxidoreductase submit 3', 'NADH-plastoquinone oxidoreductase chain 3', 'NADH dehydrogenase D3', 'NADH dehydrogenase ND3 subunit', 'NAD(P)H-quinone oxidoreductase subunit 3', 'NAD(P)H-quinone oxidoreductase chain 3', 'NADH-plastoquinoneoxidoreductase subunit 3', 'NADPH dehydrogenase complex C', 'NADH plastoquinone oxidoreductase subunit 3', 'ndhC protein', 'NAD(P)H-quinone oxidoreductase subunit C', 'NdhC; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit C', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit C', 'NADH dehydrogenase C', 'NADH dehydrogenase subunit 3 C', 'subunit 3 of NADH-plastoquinone oxidoreductase', 'NADH-plastoquinone oxidoreductase C', 'NADH dehygrogenase subunit 3', 'NADH-plastoquinone oxidoreductase protein 3', 'NADH-quinone oxidoreductase subunit A', 'NADH dehydrogenase ND3', 'NADH hydrogenase subunit 3', 'NADH-plast oquinone oxidoreductase subunit 3', 'NAD(P)H-quinone oxidoreductase subunit 3, chlorop lastic', 'NADH-plastoquinone oxidoreductase subunit 3transl_table 11', 'NADH-plastoquinoneo xidoreductase subunit 3'],
    "ndhD":     ['NADH-plastoquinone oxidoreductase subunit 4', 'NADH dehydrogenase subunit 4', 'NADH dehydrogenase subunit D', 'NADH-plastoquinone oxidoreductase subunit D', 'NADH-plastoquinone oxidoreductase chain 4', 'NADH dehydrogenase ND4 subunit', 'NADH dedydrogenase subunit 4', 'NAD(P)H-quinone oxidoreductase subunit 4', "NADH-plastoquinone oxidoreductase subunit 4'", 'NADH-plastoquinone oxidoreductase subunit4', 'NADPH dehydrogenase complex D', 'NADH plastoquinone oxidoreductase subunit 4', 'NAHD-plastoquinone oxidoreductase subunit 4', 'NADH dehydrogenase ND4', 'NdhD protein', 'NADH-dehydrogenase subunit D', 'NADH dehydrogenase subunit IV', 'NADH-plastoquinone oxidoreducta sesubunit 4', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit D', 'photosystem I subunit D', 'subunit 4 of NADH-plastoquinone oxidoreductase', 'NADH-plastoquinone oxidoreductase protein 4', 'dehydrogenase subunit 4', 'NADH-plastoquinoneoxidoreductase subunit 4', 'NADH-plastoquinoneoxidoreductasesubunit4', 'NAD(P)H-quinone oxidoreductase chain 4, chloropla stic', 'NADH-plastoquinoneo xidoreductase subunit 4', 'NAD(P)H-quinone oxidoreductase subunit 4 1', 'NdhD; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit D'],
    "ndhE":     ['NADH-plastoquinone oxidoreductase subunit 4L', 'NADH dehydrogenase subunit 4L', 'NADH dehydrogenase subunit E', 'NADH-plastoquinone oxidoreductase subunit E', 'NdhE', 'NADH-plastoquinone oxidoreductase chain 4L', 'NADH dehydrogenase ND4L subunit', 'NAD(P)H-quinone oxidoreductase subunit 4L', 'NAD(P)H-quinone oxidoreductase chain 4L', 'NADPH dehydrogenase complex E', 'NADH plastoquinone oxidoreductase subunit 4L', 'NAHD-plastoquinone oxidoreductase subunit 4L', 'NADH-plastoquinone oxidoreductase subunit L', 'NAD(P)H-quinnone oxidoreductase chain 4L', 'NAD(P)H-quinnone oxidoreductase subunit 4L', 'NADH dehydrogenase ND4L', 'ndhE protein', 'NADH dehydrogenase subunit IVL', 'NADH-plastoquinone oxidoreducta sesubunit 4L', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit E', 'NADH-plastoquinone oxudoreductase subunit 4L', 'NADH-plastoquinone oxidoreductas eubunit 4', 'NADH-palstoquinone oxidoreductase subunit 4L', 'NADH-plastoquinone oxidoreductase subunit 4L1', 'subunit 4L of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit 4L', 'NADHdehydrogenase subunit 4L', 'NADH-plastoquinone oxidoreductase protein 4L', 'dehydrogenase subunit 4L', 'NdnE', 'NADH dehydrogenase subunit 4L subunit', 'NADH-plastoquinoneoxidoreductasesubunit4L', 'NAD(P)H-quinone oxidoreductase subunit 4L, chloro plastic', 'NADH-plastoquinoneo xidoreductase subunit 4L', 'NdhE; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit E'],
    "ndhF":     ['NADH-plastoquinone oxidoreductase subunit 5', 'NADH dehydrogenase subunit 5', 'NADH dehydrogenase subunit F', 'NADH-plastoquinone oxidoreductase subunit F', 'NdhF', 'NADH dehydrogenase F', 'NADH-plastoquinone oxidoreductase chain 5', 'NADH dehydrogenase ND5 subunit', 'NADH-plastiquinone oxidoreductase subunit F', 'NAD(P)H-quinone oxidoreductase subunit 5', 'NAD(P)H-quinone oxidoreductase chain 5', 'NADH-plastoquin one oxidoreductase subunit 5', 'NADPH dehydrogenase complex F', 'NADH plastoquinone oxidoreductase subunit 5', 'NAHD-plastoquinone oxidoreductase subunit 5', 'NADH dehydrogenase', 'NADH dehydrogenase subunit V', "NADH-plastoquinone oxidoreductase subunit 5'", 'NADH dehydrogenase ND5', 'ndhF protein', 'NADH dehydrogenase subunit 52', 'NADH-plastoquinone oxidoreductase subunit 57', 'NADH-plastoquinone oxidoreducta sesubunit 5', 'NdhF; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit F', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit F', 'NADH-plastoquinon eoxidoreductase subunit 5', 'truncated NADH-plastoquinone oxidoreductase subunit 5', 'NADH-plastoquinonevoxidoreductase subunit 5', 'subunit 5 of NADH-plastoquinone oxidoreductase', 'NADH-plastoquinoneoxidoreductase subunit 5', 'NADH-plastoquinone oxidoreductase protein 5', 'Nicotinate dehydrogenase FAD-subunit', 'NADH-plastoquin oneoxidoreductase subunit 5', 'NADH dehydrogenase subunit 5 subunit', 'NADH-plastoquinoneoxidoreductasesubunit5', 'NAD(P)H-quinone oxidoreductase subunit 5, chlorop lastic; )', 'NADH-plastoquinoneo xidoreductase subunit 5'],
    "ndhG":     ['NADH-plastoquinone oxidoreductase subunit 6', 'NADH dehydrogenase subunit 6', 'NADH dehydrogenase subunit G', 'NADH-plastoquinone oxidoreductase subunit G', 'NdhG', 'NADH dehyrogenase subunit 6', 'NADH-plastoquinone oxidoreductase chain 6', 'NADH dehydrogenase ND6 subunit', 'NAD(P)H-quinone oxidoreductase subunit 6', 'NAD(P)H-quinone oxidoreductase chain 6', 'NADH dehydrogenasesubunit 6', 'NADH-plastoquinone oxidoreductase subunit6', 'NADPH dehydrogenase complex G', 'NADH plastoquinone oxidoreductase subunit 6', 'NAHD-plastoquinone oxidoreductase subunit 6', 'NADH dehydrogenase ND6', 'ndhG protein', 'NADH dehydrogenase subunit VI', 'NADH-plastoquinone oxidoreductase subunit 6; NADH dehydrogenase subunit 6', 'NADH-plastoquinone oxidoreducta sesubunit 6', 'NADH-plastoquinone oxidorectase subunit 6', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit G', 'NADH-plastoquinon eoxidoreductase subunit 6', 'subunit 6 of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit 6', 'NADH degydrogenase subunit 6', 'NADH-plastoquinone oxidoreductase protein 6', "'NADH-plastoquinone oxidoreductase subunit 6", 'NADH-plastoquinoneoxidoreductase subunit 6', 'NADH dehydrogenase subunit 6 subunit', 'NADH-plastoquinoneoxidoreductasesubunit6', 'NADH-plastoquinone oxiductase subunit 6', 'NAD(P)H-quinone oxidoreductase subunit 6, chlorop lastic; )', 'NADH-plastoquinoneo xidoreductase subunit 6', 'NADH degydrogenase ND6 subunit', 'NdhG; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit G'],
    "ndhH":     ['NADH-plastoquinone oxidoreductase subunit 7', 'NADH dehydrogenase subunit 7', 'NADH-plastoquinone oxidoreductase subunit H', 'NdhH', 'NADH dehydrogenase subunit H', 'NADH-plastoquinone oxidoreductase 49 kDa subunit', 'NADH dehydrogenase 49KDa protein', 'NADH dehydrogenase subunit 8', 'NADH dehydrogenase 49KDa subunit', 'NADH dehydrogenase 49 kDa subunit', 'NAD(P)H-quinone oxidoreductase subunit H', 'NADH dehydrogenase 49kD subunit', 'NADH-plastoquinone oxidoreductase subunit', 'NADPH dehydrogenase complex H', 'NADH plastoquinone oxidoreductase subunit 7', 'NADH-plastoquinone oxidoreductase 49 kDa subunit 7', 'NADH-plastoquinone oxidoreductase 49kDa subunit 7', 'ndhD', 'ndhH protein', 'NADH dehydrogenase subunit VII', 'NADH-plastoquinone oxidoreducta sesubunit 7', 'NADH dehydrogenase 49 kDa protein', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit H', 'NADH dehydrogenase 49 kD subunit', 'ndhH NADH dehydrogenase 49 kDa subunit', '49 kDa subunit of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit 7', 'NADH-plastoquinoneoxidoreductase 49 kDa subunit', 'NADH-plastoquinone oxidoreductase 49 KD subunit', 'truncated NADH-plastoquinone oxidoreductase subunit 7', 'NADH-plastoquinoneoxidoreductasesubunit7', 'NAD(P)H-quinone oxidoreductase subunit H, chlorop lastic', "NADH-plastoquinone oxidoreductase 49 kDa subunit'", 'NADH-plastoquinoneo xidoreductase subunit 7', 'NADH-plastoquinone oxidoreductase 49 kDa', 'NdhH; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit H'],
    "ndhI":     ['NADH-plastoquinone oxidoreductase subunit I', 'NADH dehydrogenase subunit I', 'NdhI', 'NADH dehydrogenase 18kD subunit', "NADH-plastoquinone oxidoreductase subunit I'", 'NADH dehydrogenase 18 kDa subunit', 'NAD(P)H-quinone oxidoreductase subunit I', 'NADH-plastoquinone oxidoreductase subunitI', 'NADH dehydrogenase 18kDa subunit', 'NADPH dehydrogenase complex I', 'NADH plastoquinone oxidoreductase subunit I', 'NADH-plastoquinoneoxidoreductase subunit I', 'NAHD-plastoquinone oxidoreductase subunit I', 'ndhI protein', "NADH-plastoquinone oxidoreductase subunit I''", 'NADH-plastoquinone oxidoreducta sesubunit I', 'NADH-plastoquinone oxidorectase subunit I', 'plastoquinone oxidoreductase subunit I', 'MADH-plastoquinone oxidoreductase subunit I', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit I', 'NADH dehydrogenase 18 kD subunit', 'NADH-plastoquinone oxidoreductase subunit 8', '18 kDa subunit of NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase subsunit I', 'NADH-plastoquinone oxdoreductase subunit I', 'NADH-plastoquinone oxidoreductase SU I', 'NADH dehyrogenase subunit I', 'NADH-plastoquinoneoxidoreductasesubunitI', 'NDH subunit I', 'NADH-plastoquinoneo xidoreductase subunit I', 'NdhI; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit I'],
    "ndhJ":     ['NADH dehydrogenase subunit J', 'NADH-plastoquinone oxidoreductase subunit J', 'NdhJ', 'NADH-plastoquinone oxidoreductase submit J', 'NADH dehydrogenase 30 kDa subunit', 'NADH dehydrogenase 19kDa subunit', 'NAD(P)H-quinone oxidoreductase subunit J', 'NAD(P)H-quinone oxidoreductase chain J', 'NADH dehydrogenase 19 kDa subunit', 'NADH-plastoquinoneoxidoreductase subunit J', 'NADH dehydrogenase 19kD subunit', 'NADPH dehydrogenase complex J', 'NADH plastoquinone oxidoreductase subunit J', 'NADH dehydrogenase subunit', 'ndhJ protein', 'NADH dehydrogensase subunit J', 'NADH-quinone oxidoreductase subunit C', 'NADH-plastoquinone oxidoreductase subunit J protein', 'NdhJ; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit J', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit J', 'NADH-plastquinone oxidoreductase subunit J', 'NADH dehydrogenase 30 kD subunit', 'plastoquinone oxidoreductase subunit J', 'NADH dehydrogenase 30kD subunit', '30 kDa subunit of NADH-plastoquinone oxidoreductase', 'NADH-plastoquinone oxidoreductase J', 'NADH dehygrogenase subunit J', 'truncated NADH-quinone oxidoreductase subunit C', 'NADH-plastoquinone oxidoreductase', 'NADH dehydrogenase 30kDa subunit', 'NADH dehydrogenase 17kD subunit', 'NADH dehydrogenase subunit 10', 'NADH-plast oquinone oxidoreductase subunit J', 'NADH-plastoquinone oxidoreductase subunitJ', 'NAD(P)H-quinone oxidoreductase subunit J, chlorop lastic', 'NADH-plastoquinoneo xidoreductase subunit J'],
    "ndhK":     ['NADH-plastoquinone oxidoreductase subunit K', 'NADH dehydrogenase subunit K', 'NdhK', 'NADH-plastoquinone oxidoreductase submit K', 'NADH dehydrogenase 27 kDa subunit', 'NAD(P)H-quinone oxidoreductase subunit K', 'NAD(P)H-quinone oxidoreductase chain K', 'NADH dehydrogenase 32 kDa subunit', 'NADH-plastoquinoneoxidoreductase subunit K', 'ndhK protein', 'NADH dehydrogenase 32kD subunit', 'NADH dehydrogenase 32kDa subunit', 'NADPH dehydrogenase complex K', 'NADH plastoquinone oxidoreductase subunit K', 'truncated NADH dehydrogenase 27k Da subunit', 'putative NADH-plastoquinone oxidoreductase subunit K', 'NAD(P)H-quinone oxidoreductase subunit K, chloroplastic', 'NdhK; NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit K', 'NDH complex (ferredoxin:plastoquinone oxidoreductase) subunit K', 'NADH plastoquinone oxidoreductase subuni tK', 'NADH-plastquinone oxidoreductase subunit K', 'NADH dehydrogenase 27 kD subunit', '27 kDa subunit of NADH-ubiquinone oxidoreductase', 'NADH-plastoquinone oxidoreductase K', 'NADH dehydrogenase 27kD subunit', 'NADH dehygrogenase subunit K', 'NADH dehydrogenase 27kDa subunit', 'NADH-plastoquinone oxidoreductase subunit K5', 'NADH dehydrogenase subunit 11', 'NADH-plast oquinone oxidoreductase subunit K', 'NAD(P)H-quinone oxidoreductase subunit K, chlorop lastic', 'NADH-plastoquinoneo xidoreductase subunit K'],
    "pafI":     ['photosystem I assembly factor I', 'pafI', 'photosystem I-related pafI', 'photosystem assembly factor I'],
    "pafII":    ['photosystem I assembly factor II', 'pafII'],
    "pbf1":     ['photosystem II reaction center protein N', 'pbf1', 'pbf1 protein', 'Proteasome subunit beta type-1', 'N-terminal nucleophile aminohydrolases (Ntn hydrolases) superfamily protein', 'prolamin-box binding factor1', 'photosystem biogenesisfactor 1', 'PBF1 N-terminal nucleophile aminohydrolases (Ntn hydrolases) superfamily protein', 'photosystem biogenesis factor1', 'photosystem biogenesis factor 1 (photosystem II protein N)'],
    "petA":     ['cytochrome f', 'PetA', 'apocytochrome f', 'component of cytochrome b6/f complex', 'cytchrome f', 'apocytochrome f precursor', 'cytochromef', 'Thioredoxin-like protein HCF164', 'component of cytochrome b6f complex', 'cytochrome b6/f', 'component of cytochromeb6/fcomplex', 'component of cytochrome b6/fcomplex', 'apocytochrome f of cytochrome b6/f complex', 'petA protein', 'cytochrome b6/f complex', 'PetA; cytochrome f', 'cytochrome f precursor', 'cytochrome b6/f complex protein A', 'apocytochrome f precursor of cytochrome b6/f complex', 'cytochrome b6/f complex component cytochrome f', 'apocytochrome f precursor; component of cytochrome b6-f complex', 'component of cytochrome b6-f complex', 'B/f complex cytochrome f'],
    "petB":     ['cytochrome b6', 'PetB', 'apocytochrome b6 of cytochrome b6/f complex', 'cytchrome b6', 'cytochrome b6/f cytb subunit', 'cytohrome b6', 'cytochrome b', 'cytochrome b6/f complex PetB protein', 'cytochromeb6', 'product cytochromeb6', 'cytochrome b6 / f complex subunit IV', 'petB protein', 'cytochromeb 6', 'petB CDS', 'PetB; cytochrome b6', 'cytochrome b6 complex subunit', 'cytochrome b6/f complex subunit II', 'cytochrome b6/f complex protein B', 'cytochrome b 6', 'cytochrome b4', 'cytochrome b6/f complex subunit 2', 'cytochrome b6/f subunit B', 'product: cytochrome b6', 'cytochrome b(6)'],
    "petD":     ['cytochrome b6/f complex subunit IV', 'cytochrome b6f complex subunit IV', 'cytochrome b6/f subunit IV', 'PetD', 'cytochrome b6/f complex subunit 4', 'cytochrome b6-f complex subunit IV', 'cytochrome b/f', 'cytochrome b6f subunit IV', 'cytchrome b6/f complex subunit IV', 'cytochrome b/f complex subunit IV', 'cytochrome b6/f subunit subunit IV', 'cytohrome b6/f complex subunit IV', 'cytochrome b6-f complex subunit 4', 'cytochromeb 6f complex subunit IV', 'cytochromeb6/f complex subunitIV', 'cytochrome b6/f complex subunitIV', 'cytochrome b6/f complex subunit ?', 'petD protein', 'cytochrome b6 f complex subunit 4', 'Cyt b6/f complex subunit IV', 'cytochrome b6f subunit D', 'cytochrome b6/f subunit D', 'petD CDS', 'cytochrome b6/f commplex subunit IV', 'cytochrome b6/f complex subunit IV protein', 'cytochrome b6 f subunit IV', 'PetD; cytochrome b6/f complex subunit IV', "cytochrome b6/f complex subunit IV'", 'cytochrome b6/f complex protein D', 'cytochrome f b6/f complex subunit IV', 'cytochromeb 6/f complex subunit IV', 'subunit IV of cytochrome b6/f complex', 'cytochrome b6/f complex subunit D', 'cytochrome b/f complex subunit 4', 'cytochrome b4/f complex subunit IV', 'sytochrome b/f complex subunit 4', 'cytochrome B6 subunit', 'cytochrome b6/f complexsubunit IV', 'cytohrome_b6/f_complex subunit IV', 'cytochrome b6 /f complex subunit IV'],
    "petE":     ['cytochrome b6 /f-complex subunit v', 'cytochrome b6/f subunit E', 'cytochrome b /f complex subunit 5'],
    "petG":     ['cytochrome b6/f complex subunit V', 'cytochrome b6f complex subunit V', 'cytochrome b6/f subunit G', 'PetG', 'cytochrome b6/f complex subunit 5', 'cytochrome b6-f complex subunit V', 'cytochrome b6-f complex, subunit V', 'cytochrome b6f subunit G', 'cytochrome b6/f complex subunit G', 'cyt b6/f complex subunit V', 'cytchrome b6/f complex subunit V', 'cytochrome b/f complex subunit V', 'cytochrome b6/f subunit subunit V', 'cytochrome b6-f complex subunit 5', 'chtochrome b6-f complex subunit V', 'cytochromeb6f complex subunit V', 'cytochrome b6/f subunit V', 'cytochromeb6-f complex subunit 5', 'cytochrome b6f complex subunitV', 'petG protein', 'cytochrone b6/f complex subunit V', 'cytochrome b6/fcomplex subunit V', 'cytochrome b6 f subunit G', 'PetG; cytochrome b6/f complex subunit V', 'required for either the stability or assembly of the cytochrome b6/f complex', 'cytochrome b5/f complex subunit V', 'cytochrome f b6/f complex subunit V', 'subunit V of cytochrome b6/f complex', 'cytochrome b6 /f complex subunit V', 'cytochrome b/f complex subunit 5', "cytochrome b6/f subunit G'", 'putative cytochrome B6-F complex subunit 5', 'cytochrome b6/f-complex subunit V', 'possible cytochrome B6-F complex subunit 5', 'cytochromeb 6/f complex subunit V', 'cytochrome b6/f complexsubunit V', 'product: cytochrome b6/f complex subunit V', 'cytochrome b6f', 'cytochrome b6-f complex: subunit 5'],
    "petL":     ['cytochrome b6/f complex subunit VI', 'cytochrome b6f complex subunit VI', 'cytochrome b6/f subunit L', 'PetL', 'cytochrome b6-f complex subunit 6', 'cytochrome b6-f complex subunit VI ycf7', 'cytochrome b6-f complex subunit VI', 'cytochrome b/f complex 3.5 kDa subunit', 'cytochrome b6f subunit L', 'cytochrome b6/f complex subunit L', 'cytchrome b6/f complex subunit VI', 'cytochrome b6/f complex small subunit', 'cytochrome b6/f subunit subunit VI', 'cyt b6/f complex subunit VI', 'cytochrome bf complex 3.5 kDa subunit', 'cytochromeb6f complex subunit VI', 'cytochrome b6/f subunit VI', 'cytochrome b6 fcomplex subunit VI', 'cytochromeb6-f complex subunit 6', 'cytochrome b6/f complex subunit 6', 'ORF31', 'petL protein', 'hypothetical protein || ORF31 protein', 'ORF31 protein', 'cytochrome b6/f complex 3.5 kDa subunit', 'cytochrome b6-f complex subunit', 'cytochrone b6/f complex subunit VI', 'cytochrome b6 f subunit L', 'PetL; cytochrome b6/f complex subunit VI', 'cytochrome b/f complex 3.5 kD subunit', 'cytochrome b6/f complex subunit', 'cytochrome b/f complex 3.5kD subunit', 'cytochrome f b6/f complex subunit VI', 'subunit VI of cytochrome b6/f complex', 'cytb6/f complex subunit VI', 'cutochrome b6/f complex subunit VI', 'cytochrome b6/f complex subunit I', 'cytochrome b6-f complex subunit VI (Ycf7)', 'cytochromeb 6/f complex subunit VI', 'cytochrome b6 /f complex subunit VI', "cytochrome b6/f complex subunit VI'", 'cytochrome b6/f complexsubunit VI'],
    "petN":     ['cytochrome b6/f complex subunit VIII', 'cytochrome b6f complex subunit VIII', 'PetN', 'cytochrome b6/f subunit N', 'cytochrome b6-f complex subunit 8', 'cytochrome b6-f complex subunit VIII ycf6', 'cytochrome b6-f complex subunit VIII', 'cytochrome b6/f complex subunit N', 'cytochrome b6f subunit N', 'cytchrome b6/f complex subunit VIII', 'cytochrome b/f complex subunit VIII', 'cytochrome b6/f subunit subunit VIII', 'cytochromeb6/f complex subunit VIII', 'cytochrome b6/fcomplex subunit VIII', 'cytochrome b6f complex subunit', 'cytochrome b6/f complex subunit VII', 'cytochrome b6/f complex subunit 8', 'cytochrome b6/f subunit VIII', 'cytochrom b6/f complex subunit', "cytochrome b6/f complex subunit VIII'", 'petN protein', 'cytochrome b6 f complex subunit N', 'cytochrome b6 f complex subunit VIII', 'hypothetical chloroplast RF60', 'cytochrome b6 f subunit N', 'PetN; cytochrome b6/f complex subunit VIII', 'cytochrome b/f complex subunit', 'cytochromeb 6f complex subunit VIII', 'cytochrome b6f complexs ubunit VIII', 'putative chloroplast RF61', 'cytochrome b/f complex subunit N', 'cytochrome f b6/f complex subunit VIII', 'subunit VIII of cytochrome b6/f complex', 'Cytochrome b/f complex subunit N (3.2kD)', 'cytochromeb6/f complex subunit N', 'cytochrome b/6f complex subunit VIII', 'a subunit of cytochrome b6f complex', 'cytochrome b/f complex subunit(N)', 'cytochrome b6/f complex subunit III', 'cytochrome b6/f subunit NtrnC-GCA', 'cytochrome b6-f complex subunit VIII (Ycf6)', 'cytochromeb 6/f complex subunit VIII', 'cytochrome b6 /f complex subunit VIII', 'cytochrome b6f complex'],
    "psaA":     ['PsaA', 'photosystem I P700 apoprotein A1', 'photosystem I P700 chlorophyll a apoprotein A1', 'PSI P700 apoprotein A1', 'photosystem I subunit A', 'photosystem I P700 chlorophyll apoprotein A1', 'chlorophyll a apoprotein A1', 'photosystem IP700 apoprotein A1', 'photosystem I P700', 'PSI P700 A1 apoprotein', 'photosystemIP700apoproteinA1', 'photosystem I P700 chlorophy11 A apoprotein A1', 'psaA protein', 'photosystem I P700 chlorophy11 A apoprotein', 'photosystem IP700 apoprote in A1', 'PsaA; photosystem I P700 chlorophyll a apoprotein A1', 'photosystem I protein P700 chlorophyll A apoprotein A1', 'P700 apoprotein A1 of photosystem I', 'PSII P700 apoprotein A1', 'photosystem I P700 apo protein A1', 'photosystem I P700 chlorophylla apoprotein A1', 'photosystem I P700 apoprotein subunit Ia', 'PSI P700 apoprotein 1', 'photosystem I protein A', 'PSI P700 apoprotein', 'psaA product, photosystem I protein', 'Photosystem I P700 chlorophyll a apoprotein A1 (E C', 'photosystem IP700 apo protein A1', 'PS1 P700 apoprotein A1', 'mRNA maturation factor 3'],
    "psaB":     ['photosystem I P700 apoprotein A2', 'photosystem I P700 chlorophyll a apoprotein A2', 'photosystem I P700 apoprotein B', 'PsaB', 'PSI P700 apoprotein A2', 'photosystem I subunit B', 'photosystem I P700 chlorophyll apoprotein A2', 'chlorophyll a apoprotein A2', 'photosystem IP700 apoprotein A2', 'PSI P700 A2 apoprotein', 'photosystemIP700apoproteinA2', 'photosystem I chlorophyll A apoprotein A2', 'photosystem I P700 chlorophy11 A apoprotein A2', 'photosystem I P700 chlorophyll a apoprotein A', 'psaB protein', 'photosystem I P700 chlorophyll a apoprotein', 'photosystem I P700 chlorophyll a', 'photosystem I P700 apoproteinA2', 'photosystem IP700 apoprote in A2', 'PsaB; photosystem I P700 chlorophyll a apoprotein A2', 'photosystem I protein P700 chlorophyll A apoprotein A2', 'photosystem I P799 apoprotein A2', 'P700 apoprotein A2 of photosystem I', 'photosystem I P700 apo protein A2', 'photosystem I P700 chlorophylla apoprotein A2', 'photosystem I P700 apoprotein subunit Ib', 'ORF55d', 'photosystem I protein B', 'hotosystem I P700 apoprotein A2', 'photosystem I apoprotein A2', 'Photosystem I P700 chlorophyll a apoprotein A2 (E C', 'photosystem IP700 apo protein A2', 'RNA binding protein', 'photosystem I P700 apoprotein a A2', 'photosystem I P700 chlorophyll Aapoprotein A2'],
    "psaC":     ['photosystem I subunit VII', 'photosystem I subunit VII (iron-sulfur center)', 'photosystem I subunit C', 'PsaC', 'photosystem I iron-sulfur center subunit VII', 'PSI 9KDa protein', 'PSI 9kD protein', 'photosystem I 9 kDa protein', 'photosytem I subunit VII', 'photosystem I iron-sulfur center', 'PSI 9 kDa protein', 'PSI subunit VII', 'photosystem I iron-sulfur protein PsaC', 'photosystem I iron-sulfur protein', 'photosystem I 9kDa protein', 'photosystemIsubunit VII', 'psaC protein', 'photosystem I iron-sulfur center 9 kDa protein', 'PSI C protein', 'photosystem I protein C', 'photosystemIsubunitVII', 'PSI 9 kD protein', 'photosystemI subunit VII', 'subunit VII of photosystem I (Fe-Spolypeptide)', 'photosystem I iron-sulfur centerI', 'photosystem I protein', 'photosystem I iron-sulfur center protein', 'photosystem 1 protein C', 'Photosystem I iron-sulfur center (subunit VII)', 'photosystem I subunit 7', 'Photosystem I iron-sulfur center (Photosystem I subunit VII)', 'PasC', 'subunit VII of photosystem I (Fe-S polypeptide)', 'subunit VII of photosystem I', '9 kDa protein', 'PsaC; photosystem I subunit VII'],
    "psaI":     ['photosystem I subunit VIII', 'PSI reaction center subunit VIII', 'photosystem I subunit I', 'photosystem I reaction center subunit VIII', 'PsaI', 'PSI I protein', 'photosystem I I-protein', 'PSI reaction centre subunit VIII', 'PSI subunit VIII', 'PSI I-protein', 'photosystem I reaction centre subunit VIII', 'psaI protein', 'Mannose-1-phosphate guanyltransferase', 'PsaI; photosystem I subunit VIII', 'photosystem I component', 'photosystem I protein I', 'photosytem I subunit VIII', 'photosysten I subunit I', 'subunit VIII of photosystem I', 'photosystem I protein VIII', 'component of photosystem I', 'Photosystem I polypeptide I', 'PSI small peptide', 'photosystem I subunit IpafII', 'reaction centre subunit VIII'],
    "psaJ":     ['photosystem I subunit IX', 'PSI reaction centre subunit IX', 'photosystem I subunit J', 'PsaJ', 'photosystem I reaction center subunit IX', 'PSI J protein', 'photosystem I J-protein', 'PSI J-protein', 'PSI reaction center subunit IX', 'PSI subunit IX', 'photosystem I reaction centre subunit IX', 'psaJ protein', 'PSI protein J', 'photosystem I subunit IX protein', 'photosystem I protein J', 'psJ', 'PsaJ; photosystem I subunit IX', 'photosystem I subunit IXf', 'subunit IX of photosystem I', 'photosystem I protein IX', 'photosystem I subunit 10', 'PSII reaction center subunit IX'],
    "psaM":     ['photosystem I protein M', 'photosystem I subunit XII', 'PsaM', 'photosystem I M-protein', 'PSI M protein', 'photosystem I subunit M', 'photosystem I reaction center subunit M', 'photosystem I M protein', 'photosystem I reaction center subunit XII', 'PSI M-protein', 'M polypeptide of photosystem I'],
    "psb30":    ['Psb30', 'photosystem II protein Psb30', 'photosystem II subunit 30'],
    "psbA":     ['photosystem II protein D1', 'PsbA', 'photosystem II reaction center protein D1', 'photosystem II Qb protein D1', 'PSII 32 KDa protein', 'photosystem II subunit D1', 'photosystem II protein D1 precursor', 'photosystem II q(b) protein', 'photosystem II Q(b) protein (D1)', 'PSII 32 kD protein', 'photosystem II protein D', 'photosystem II 32 kDa protein', 'photosystem II P680 reaction center D1 protein', 'PSII D1 protein', 'photosystam II protein Da', 'photosystem IIprotein D1', 'photosystem II Q protein (D1)', 'photosystem II reaction centre protein D1', 'psbA protein', 'PS II protein D1', 'photosystem II Q protein', 'PSII protein D1', 'phostosystem II protein D1', 'photosystem Q(B) protein', 'PsbA; photosystem II protein D1', 'PSII D1-protein', 'photosystem II protein D1 2', 'photosystemII protein D1', 'PSII 32kd protein', 'photosystem II protein A', 'D1 reaction center protein of photosystem II', 'photosystem II protein Dl', 'photosystem II 32kDa protein', 'photosystem II Q(b) protein D1', 'photosystemIIQ(b)proteinD1', 'photosystemIIQ(b) proteinD1', 'photosystem II D1-reaction-center protein', '32 kD PSII D1 protein', 'PSII 32kDa protein', 'photosistem II protein D1', 'photosystem II Q protein D1', 'photosystem Q(B) protein 2 precursor', 'Photosystem II protein D1 3', 'D1 protein of photosystem II'],
    "psbB":     ['photosystem II 47 kDa protein', 'photosystem II CP47 chlorophyll apoprotein', 'PsbB', 'photosystem II p680 chlorophyll A apoprotein (CP-47)', 'PSII 47 kDa protein', 'Photosystem II CP47', 'PSII 47KDa protein', 'photosystem II CP47 reaction center protein-like', 'photosystem II p680 chlorophyll A apoprotein', 'photosystem II subunit CP47', 'photosystem II CP47 protein', 'photosystem II CP47 kDa chlorophyll apoprotein', 'photosystem II CP47 reaction center protein', 'photosystem II p680 chlorophyll A apoprotein CP-47', 'photosystem II protein 47KD', 'photosystem II 47KD protein', 'PSII 47kD protein', 'photosystem II protein B', 'photosystem II P680 chlorophyll A apoprotein (CP-47protein)', 'photosystem II 47kDa protein', 'photosystem II reaction center protein B', 'photosystem II CP47 chlorophyllapo protein', 'photosystemII CP47 chlorophyll apoprotein', 'psbB protein', 'PS II CP47 chlorophyll apoprotein', 'PSII 47 kD protein', 'photosystem CP47 chlorophyll apoprotein', 'photosystem II CP47 chlorophy ll apoprotein', 'PsbB; photosystem II 47 kDa protein', 'photosystem II CP47 chloropholl apoprotein', 'photosystem II 47 kDa protein (CP47)', 'photosystem II', 'photosystem II subunit B', 'photosystem II 47 kDa protein B', 'CP47 chlorophyll apoprotein of photosystem II', 'photosystem II protein CP47', 'PSII CP47 chlorophyll apoprotein', 'photosystem II protein CP47 chlorophyll apoprotein', 'photosystem II P680 chlorophyll A apoprotein; PSII 47 kDa protein', 'PSII P680 chlorophyll A apoprotein', 'photosystem II CP47 chloropll apoprotein', 'photosystem II CP47 chlorophyll apo protein', 'photosystem II CP47 reaction center', 'mRNA maturation factor', 'photosystem II CP47 apoprotein'],
    "psbC":     ['photosystem II CP43 chlorophyll apoprotein', 'photosystem II 44 kDa protein', 'photosystem II 43 kDa protein', 'PsbC', 'photosystem II 44 kDa apoprotein (P6)', 'photosystem II CP43 reaction center protein', 'photosystem II 44 kDa apoprotein P6', 'PSII 43 KDa protein', 'photosystem II 44 kDa apoprotein', 'photosystem II subunit CP43', 'photosystem II CP43 protein', 'photosystem II CP43 kDa chlorophyll apoprotein', 'photosytem II 44 kDa protein', 'photosystem II 44 kDa protein P6', 'photosystem II44 kDa protein', 'PSII 44 kDa protein', 'photosystem II CP43', 'photosystem II CP43 chlorophyll apopretein', 'photosystemIICP43chlorophyllapoprotein', 'photosystem II 44 kDa protein (CP43)', 'photosystem II CP43 protein C', 'photosystem II CP43 chlorophyllapo protein', 'photosystemII CP43 chlorophyll apoprotein', 'photosystem II protein C', 'photosystem II protein CP43 chlorophyll apoprotein', 'psbC protein', 'PS II 43 kDa protein', 'PSII 44kd protein', 'PSII 44 kD protein', 'photosystem II CP43 kDa protein', 'PsbC; photosystem II 44 kDa protein', 'hotosystem II 44 kDa protein', 'photosystem II 43 kDa protein (CP43)', 'photosystem II protein C2', 'CP43 chlorophyll apoprotein of photosystem II', 'photosystem II CP43 chlorophyll apo protein', 'PSII 44kDa protein', 'photosystem II 43 kDa protein; CP43', 'photosystem II CP43 chlorophy ll apoprotein', 'photosystem II CP43 chlorophyll apoprotein; photosystem II 44 kDa protein', 'photosystem II CP43-chlorophyll', 'photosystem II protein CP43 chlorophyll', 'PSII 43kDa protein', 'photosystem II protein CP43', 'photosystem II 44KDa protein', 'photosystem II 44k Da protein', 'PSII 43kD protein', 'photosystem II reaction center protein CP43', 'photosystem II CP43 chloropll apoprotein', 'photosystem II CP43 apoprotein', 'photosytem II CP43 chlorophyll apoprotein'],
    "psbD":     ['photosystem II protein D2', 'PsbD', 'photosystem II reaction center protein D2', 'photosystem II D2 protein', 'PSII D2 protein', 'photosystem II subunit D2', 'photosystem II CP43 chlorophyll', 'photosystem II P680 reaction center D2 protein', 'photosystem II D2protein', "photosystem II protein D2'", 'psbD protein', 'PSII protein D2', 'PsbD; photosystem II protein D2', 'PSII D2-protein', 'D2 reaction center protein of photosystem II', 'photosystem II D2-reaction-center protein', 'photosytem II protein D2', 'photosystem II reaction center D2 protein'],
    "psbE":     ['photosystem II cytochrome b559 alpha subunit', 'photosystem II protein V', 'cytochrome b559 subunit alpha', 'PsbE', 'cytochrome b559 alpha chain', 'cytochrome b559 alpha subunit', 'photosystem II cytochrome b559 alpha submit', 'PSII reaction centre subunit V', 'photosystem II cytchrome b559 alpha subunit', 'photosystem II subunit E', 'photosystem II cytocytochrome b559 alpha subunit', 'photosystem II cytochrome b559 8 kDa subunit', 'photosystem II cytochrome b559 subunit alpha', 'PSII reaction center subunit V', 'PSII subunit V', 'photosystem II cytochromeb559 alpha subunit', 'cytochrome b-559 alpha subunit', 'photosystem II cytochrome b559 component alpha subunit', 'cytochrome b559 component alpha subunit', 'cytochrome b559 component alpha chain', 'cytochromeb559 subunit alpha', 'photosystem II cytochrome b 559 alpha subunit', 'photosystemII cytochrome b 559 alpha subunit', 'psbE protein', 'photosystem II cytochrome b559 alpha chain', 'PSII cytochrome b559 subunit', 'photosystem II reaction center protein E', 'cytochrome b559 subunit alpha (PSII reaction center subunit V)', 'PsbE; photosystem II protein V', 'photosystem II cytochrome b-559 alpha subunit', 'photosystem II protein E', 'PSII cytochrome b559 8 kD subunit', 'photosystem II cytochromeb 559 alpha subunit', 'PSII cytochrome b559 8kD subunit', 'photosystem II cytochrome f b559 alpha subunit', 'cytochrome b559 alpha subunit of photosystem II', 'cytochrome b559 alpha protein', 'photosystem II subunit V', 'PSII cytochrome b559 alpha chain', 'PSII cytochrome b559 alpha subunit', 'PSII cytochrome b559 8kDa subunit', 'cytochrome b559 subunit alpha (chloroplast)', 'photosystem II reaction center subunit 5', "cytochrome b559 subunit alpha' DVFGSPRPNEYFTENRQGIPLITGRFDSLAQLDEFSRSF"],
    "psbF":     ['photosystem II cytochrome b559 beta subunit', 'photosystem II protein VI', 'cytochrome b559 subunit beta', 'PsbF', 'cytochrome b559 beta chain', 'cytochrome b559 beta subunit', 'PSII cytochrome b559', 'photosystem II protein F', 'photosystem II cytochrome b559 beta submit', 'PSII reaction centre subunit VI', 'photosystem II cytchrome b559 beta subunit', 'photosystem II cytochrome b559 4 kDa subunit', 'photosystem II cytochrome b559 subunit beta', 'cytochromi b559 beta subunit', 'PSII reaction center subunit VI', 'PSII subunit VI', 'photosystem II cytochromeb559 beta subunit', 'cytochrome b-559 beta subunit', 'photosystem II cytochrome b559betasubunit', 'cytochromeb559 subunit beta', 'photosystem II reaction center subunit VI', 'photosystem II cytochrome b 559 beta subunit', 'photosystemII cytochrome b 559 beta subunit', 'psbF protein', 'photosystem II cytochrome b559 beta chain', 'b-559 alpha subunit', 'cytochrome b559 subunit beta (PSII reaction center subunit VI)', 'PsbF; photosystem II protein VI', 'photosystem II cytochrome b-559 beta subunit', 'photosytem II cytochrome b559 beta subunit', 'PSII cytochrome b559 4 kD subunit', 'photosystem II cytochromeb 559 beta subunit', 'PSII cytochrome b559 4kD subunit', 'photosystem II cytochrome f b559 beta subunit', 'cytochrome b559 beta subunit of photosystem II', 'photosystem II cytochrome b559 beta subunit; photosystem II protein VI', 'cytochrome b559 beta protein', 'photosystem II subunit VI', 'PSII cytochrome b5559 beta chain', 'PSII cytochrome b5559 beta subunit', 'PSII cytochrome b559 4kDa subunit', 'photosystem II protein VI (chloroplast)', 'photosystem II reaction center subunit 6', 'photosystem II cytochrome b559', 'photosystem II cytochromeb 559beta subunit'],
    "psbG":     ['photosystem II G protein', 'PsbG', 'photosystem II protein G', 'beta-galactosidase fusion protein', 'photosystem G protein', 'noproductstringInfile', 'photosystem II protein VII'],
    "psbH":     ['photosystem II phosphoprotein', 'photosystem II protein H', 'photosystem II subunit H', 'PsbH', 'photosystem II 10 kDa phosphoprotein', 'PSII 10KDa phosphoprotein', 'photosystem II phosphoprotein H', 'photosystem II protein', 'photosystem II PsbH protein', 'photosystem II reaction center protein H', 'PSII H protein', 'PSII 10 kDa phosphoprotein', 'photosystem II 10kDa phosphoprotein', 'photosystem II phospho protein', 'psbH protein', 'PS II phosphoprotein', 'PSII phosphoprotein', 'photosystem II photosphoprotein', 'PsbH; photosystem II reaction center protein H', 'PSII 10kD phosphoprotein', 'photosystem II protein H-phosphoprotein', 'photosystem II phoshoprotein', 'photosystemIIphosphoprotein', '10 KDa phosphoprotein of photosystem II', 'PSII 10 kDa phpsphoprotein', 'photosystem II phosphoprotei', 'photosystem II phosphorprotein', 'IIphotosystem II phosphoprotein', "photosystem II protein H'", 'photosystem II reaction center protein 8', 'PSII 10kD phpsphoprotein'],
    "psbI":     ['photosystem II protein I', 'photosystem II subunit I', 'PsbI', 'pgotosystem II protein I', 'PSII I protein', 'photosystem II I-protein', 'photosystem II reaction center protein I', 'photosystem II PsbI protein', 'photosystem II proteinpsbI protein', 'photosystem II protein psbI protein', 'photosystem II protein psbI', 'psbI protein', 'PSII I-protein', 'PSII protein I', 'PsbI; photosystem II protein I', 'photosystem II proteion I', 'I polypeptide of photosystem II', 'photosystem II reaction center I protein I', 'truncated photosystem II 48-kDa I protein', 'PSII', 'photosystem II subunit ItrnS-GCU', 'photosystem', 'photosystem IIprotein I', 'photosystem II 48-kDa truncated I protein', 'photosystem II proteinI', 'photosistem II protein I', 'I protein of photosystem II'],
    "psbJ":     ['photosystem II protein J', 'photosystem II subunit J', 'PsbJ', 'PSII component', 'PSII reaction centre subunit X', 'photosystem II J-protein', 'photosystem II PsbJ protein', 'photosystem II reaction center protein J', 'PSII reaction center subunit X', 'hotosystem II protein J', 'PSII J protein', 'photosystem II reaction center subunit X', 'photosystem II reaction center subunit', 'photosystem II reaction center J', 'psbJ protein', 'PSII protein J', 'photosystemIIproteinJ', 'PsbJ; photosystem II reaction center subunit X', 'PSII J-protein', 'J-peptide', 'J protein of photosystem II', 'putative photosystem II protein J', 'photosystem II reaction center subunit 10', 'photosystem II reaction center J protein', 'cytochrome f photosystem II protein J'],
    "psbK":     ['photosystem II protein K', 'photosystem II subunit K', 'PsbK', 'PSII K protein', 'photosystem II K-protein', 'photosystem II reaction center protein K', 'photosystem II PsbK protein', 'photosystem II proteinpsbK', 'photosystem II protein psbK', 'psbK protein', 'PSII K-protein (UUG)', 'PSII protein K', 'photosystem II proteinK', 'PsbK; photosystem II protein K', 'photosytem II protein K', 'PSII K-protein', 'K protein of photosystem II', 'photosystem II reaction center protein K precursor', 'psbII K-protein', 'photosystem II 39-kDa K protein', 'photosystem II protein K (chloroplast)', 'photosystem lI subunit K', 'photosistem II protein K'],
    "psbL":     ['photosystem II protein L', 'photosystem II subunit L', 'PsbL', 'photosystem II reaction center subunit XII', 'PSII L protein', 'PSII reaction centre subunit XII', 'photosystem II L-protein', 'photosystem II PsbL protein', 'photosystem II reaction center protein L', 'PSII reaction center subunit XII', 'psbL protein', 'PSII protein L', 'PsbL; photosystem II reaction center subunit XII', 'PSII L-protein', 'L-peptide', 'L protein of photosystem II', 'photosystem II reaction center subunit 12', 'photosystme II proteinL', 'photosystme II protein L', 'photosystem II L protein', 'photosystem II proteinL', 'photosystemIIproteinL'],
    "psbM":     ['photosystem II protein M', 'PSII M protein', 'photosystem II subunit M', 'PSII low MW protein M', 'PsbM', 'photosystem II reaction center protein M', 'PSII low MW protein', 'photosystem II M-protein', 'photosystem II PsbM protein', 'photosystem II M protein', 'photosystem II reaction center M protein', 'photosystem II reaction center protein', 'psbM protein', 'PSII M-protein', 'PsbM; photosystem II protein M', 'photosystem II polypeptide M', 'M protein of photosystem II', 'cytochrome b6/f complex subunit M', 'photosystem II proteinM', 'photosystem II reactioncenter M protein'],
    "psbN":     ['photosystem II protein N', 'photosystem biogenesis factor 1', 'PsbN', 'photosystem II subunit', 'PSII N-protein', 'photosystem II N-protein', 'photosystem II subunit N', 'PSII N protein', 'Protein LOW PHOTOSYNTHETIC EFFICIENCY 1', 'photosystem II reaction center N', 'photosystem II reaction center N protein', 'Protein PsbN', 'psbN protein', 'PS II protein N', 'pphotosystem II protein N', 'PSII protein N', 'photosystem II reaction center assembly protein', 'PsbN; photosystem II reaction center assembly protein', 'photosystem II reaction center protein PsbN', 'N protein of photosystem II', 'photosystem II protein 14', 'photosytem II protein N'],
    "psbT":     ['photosystem II protein T', 'photosystem II subunit T', 'PsbT', 'PSII T protein', 'photosystem II T-protein', 'photosystem II PsbT protein', 'photosystem II reaction center protein T', 'PSII T-protein', 'photosystem II 5 kDa protein', 'photosystem II reaction center T', 'psbT protein', 'PS II protein T', 'PSII protein T', 'PsbT; photosystem II protein T', 'T protein of photosystem II', 'photosystem II protein 20', 'photosystem II reaction center T protein', 'product: photosystem II protein T'],
    "psbZ":     ['photosystem II protein Z', 'photosystem II subunit Z', 'PsbZ', 'photosystem II reaction center Z protein', 'photosystem II reaction center protein Z', 'photosystem II Z-protein', 'photosystem II PsbZ protein', 'PSII Z protein', 'photosystem II reaction center Z', 'Z protein of photosystem II', 'psbZ protein', 'photosystem II proteinZ', 'PSII protein Z', 'photosystem II reaction center protein Z-like protein', 'photosystemI I protein Z', 'PsbZ; photosystem II reaction center protein Z', 'PSII protein', 'PSII Z-protein', 'photosystem II (PSII) core subunit', 'PSII core subunit', 'photosystemIIproteinZ', 'hotosystem II reaction center Z protein', 'photosystem II reaction center Z protein; YCF9', 'photosystem II subunit psbZ', 'low molecular weight transmembrane protein', 'ORF62', 'photosystem II reaction center Z protein YCF9', 'photosystem II protein Z (Ycf9)', "Photosystem II reaction center protein Z'"],
    "rbcL":     ['ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose 1,5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose bisophosphate carboxylase', 'ribulose-1', 'ribulose bisphosphate carboxylase large subunit', 'ribulose-1,5-bisphosphate carboxylase/oxygenase l arge subunit', 'ribulose-1,5-bisphosphate carboxylaseoxygenase large subunit', 'Rubisco', 'ribulose-1,5-bisphosphate carboxylase/oxygenase', 'large subunit of riblose-1,5-bisphosphate carboxylase/oxygenase', "ribulose 1,5-bisphosphate carboxylase/oxygenase large subunit'", 'ribulose-1, 5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose-1, 5-bisphosphate carboxylase/oxygenaselarge subunit', '5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose bisphosphate carboxylase large chain', 'ribulose15-bisphosphate carboxylase/oxygenase large subunit', 'ribulose 1, 5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose15- bisphosphatecarboxylaseoxygenaselargesubunit', 'ribulose-1,5-bisphosphate carboxylase', 'ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit large subunit', 'ribulose 1,5 bisphosphate carboxylase/oxygenase large subunit', 'ribulose-bisphosphate carboxylase large chain', 'ribulose1,5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose-1, 5-bisphosphate carboxylase/oxygenase', 'ribulose 15-bisphosphate carboxylase oxygenase large subunit', 'ribulose15-bisphosphate carboxylase oxygenase large subunit', 'large subunit of the ribulose-bisphosphate carboxylase', 'rbcL protein', "large subunit of riblose-1,5-bisphosphate carboxylase/oxygenase'", 'ribulose-1,5-bisphosphate carboxylase/oxygenaselarge subunit', 'ribulose-1,5 -bisphosphate carboxylase/oxygenase large subunit', 'ribulose-1,5-bisphosphate', 'ribulose 1,5-bisphosphate carboxylaseoxygenase large subunit', 'ribulose-1,5-biphosphate carboxylase/oxygenase', 'ribulose bisphosphate carboxylase', 'ribulose 1,5-bisphosphate carbosylase/oxygenase large subunit', 'ribulose 1,5-bisphosphate carboxylase/oxygenase', 'ribulose 1 5-bisphosphate carbosylase/oxygenase large subunit', 'ribulose 1,5-bisphosphate carboxylase/oxygenase large subunit1', 'ribulose-1,5-bisphosphate carboxylase oxygenase', 'RbcL; ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose 15 bisphosphate carboxylase oxygenase large subunit', 'large subunit of riblose-1,5-bisphosphatecarboxylase/oxygenase', 'ribulose biphosphate carboxylase', 'ribulose 1,5-biphosphate carboxylase large subunit', 'ribulose-1,5-bisphosphate carboxylase large subunit', 'ribulose 1,5-biphosphate carboxylase/oxgenase large subunit', 'ribulose-1,5-bisphosphate caroxylase/oxygenase', 'ribulose-1,5-bisphosphate carboxylase/oxygenase large subun', 'ribulose-15-bisphosphate carboxylase/oxygenase large subunit', 'RuBisCO,Ribulose Bisphosphate Carboxylase/Oxygenase large subunit', 'ribulose 1,5-bisphosphate carboxylase oxygenase large subunit', 'ribulose bisphosphate carboxylase large chain precursor', 'ribulose-1-5-bisphosphate carboxylase/oxygenase large subunit', 'ribulose 1,5-bisphosphate carboxylase/oxygenase large subunit protein', 'ribulose-15-bisphosphate carboxylase/oxygenaselarge subunit', 'ribulose-1,5-bisphosphate carboxylase/oxygenase, large subunit', 'ribulose-1,5-bisphosphatecarboxylase/oxygenase, large subunit', 'ribulose-1,5-bisphosphate carboxylase/oxygenase large subuni', 'ribulose 1,5-bisphosphate carboxylase/oxygenaselarge subunit', 'large subunit of RuBisCO', 'ribulose-bisphosphate carboxylase large subunit', 'ribulose-1,5-bisphosphate carboxlyase/oxygenase', 'ribulose-1,5-bisphosphate carboxylase oxygenase large subunit', 'ribulose-1,5-bisphosphate carboxylase/oxygenas', 'RuBisCO large chain', 'ribulose-1,5-bisphosphatecarboxylase/oxygenase large subunit', 'ribulose bisphosphate carboxylase large subunit precursor', 'ribulose 1,5-bisphosphate carboxylase /oxygenase large chain', 'ribulose1,5bisphosphate carboxylase/oxygenase large subunit', 'ribulose-1,5-biphosphate carboxylase/oxygenase large subunit', 'ribulose-1,5-bisphosphate carboxylase/oxygenase arge subunit', 'ribulose 1,5-bisphosphate carboxylase', 'Rubisco large subunit', 'ribulose-bisphosphate carboxylase/oxygenase', 'ribulose bisphosphate carboxylase/oxygenase', 'ribulose-bisphosphate carboxylase', 'ribulose-1,5-biphosphate carboxylase', 'ribulose 1,5-biphosphate carboxylase', 'ribulose-1, 5-bisphosphate carboxylase', 'ribulose diphosphate carboxylase', 'ribulosebisphosphate carboxylase', 'ribulose 1,5-bisphosphate carboxylase large subunit', 'ribose-bisphosphate carboxylase large subunit', 'ribulose-1, 5-bisphospate carboxylase large subunit', 'ribulose-1,5-bisphosphate carboxylase/hydrogenase large subunit', 'Riboluse-1,5- Biphosphate Carboxylase/Oxygenase Large subunit', 'ribulose 1,5 bisphosphate carboxylase-oxygenase', 'ribulose-1,5-bisphosphate carboxylase/oxygenase large unite', 'ribulose-1,5 bisphosphate carboxylase/oxygenase large chain', 'Ribulose-1,5-Bisphosphate Carboxylase-Oxygenase'],
    "rpl14":    ['ribosomal protein L14', '50S ribosomal protein L14', '50S ribosomal protein L4', 'ribsomal protein L14', 'large subunit ribosomal protein L14', "'translation initiation factor 1", 'rpl14 protein', 'rpl14', 'Rpl14; ribosomal protein L14', '50S ribosomal protein L14, chloroplastic', 'robosomal protein L14'],
    "rpl16":    ['ribosomal protein L16', '50S ribosomal protein L16', '60S ribosomal protein L11', 'ribosobal protein L16', 'ribsomal protein L16', 'large subunit ribosomal protein L16', 'rpl16 protein', 'rpl16', 'rpl16 CDS', 'Rpl16; ribosomal protein L16', 'ribosomal protein L6', 'product ribosomal protein L16', 'ribisomal protein L16', '50S ribosomal protein L16, chloroplastic', 'ribosomal proteinL 16', 'ribosomal protein L16 protein'],
    "rpl2":     ['ribosomal protein L2', '50S ribosomal protein L2', '60S ribosomal protein L8', 'ribosomal protein L12', 'ribsomal protein L2', 'large subunit ribosomal protein L2', 'ribosomal protein', 'rpl2 protein', 'rpl2', 'Rpl2; ribosomal protein L2', '50S ribosomal protein L2-A, chloroplastic'],
    "rpl20":    ['ribosomal protein L20', '50S ribosomal protein L20', 'ribsomal protein L20', 'large subunit ribosomal protein L20', 'rpl20 protein', 'rpl20', 'Rpl20; ribosomal protein L20', 'ribosomal proein L20', '50S ribosomal protein L20, chloroplastic'],
    "rpl21":    ['ribosomal protein L21', '50S ribosomal protein L21'],
    "rpl22":    ['ribosomal protein L22', 'ribosomal protein 22', '50S ribosomal protein L22', '60S ribosomal protein L22', 'ribsomal protein L22', 'large subunit ribosomal protein L22e', 'rpl22 protein', 'rpl22', 'ribosomal protein L222', 'ribosomal protein CL22', '30S ribosomal protein L22', '50S ribosomal protein L22, chloroplastic', 'ribosomalproteinL22'],
    "rpl23":    ['ribosomal protein L23', '50S ribosomal protein L23', '60S ribosomal protein L23a', 'chloroplast 50S ribosomal protein L23', 'ribsomal protein L23', 'large subunit ribosomal protein L23e', 'large subunit ribosomal protein L23', 'rpl23 protein', 'rpl23', 'Rpl23; ribosomal protein L23', 'robpsomal protein L23', 'ribosomal protein L23-like protein', '60S ribosomal protein L23', 'protein L23', '50S ribosomal protein L23-A, chloroplastic'],
    "rpl32":    ['ribosomal protein L32', '50S ribosomal protein L32', '60S ribosomal protein L32', 'ribsomal protein L32', 'rpl32 protein', 'ribosomal protein 32', 'ribosomal proteinL32', 'rpl32', 'Rpl32; ribosomal protein L32', 'product ribosomal protein L32', 'ribosomal proteinL 32', 'ribosomalproteinL32', '50S ribosomal protein L32, chloroplastic', 'ribosomal protein CL32'],
    "rpl33":    ['ribosomal protein L33', '50S ribosomal protein L33', 'ribsomal protein L33', 'large subunit ribosomal protein L33', 'rpl33 protein', 'rpl33', 'Rpl33; ribosomal protein L33', 'ribosomal protein S33', 'ribosoma protein L33', '50S ribosomal protein L33, chloroplastic'],
    "rpl36":    ['ribosomal protein L36', '50S ribosomal protein L36', 'ribsomal protein L36', 'large subunit ribosomal protein L36e', 'rpl36 protein', 'ribosomal proteinL 36', "ribosomal protein L36'", 'rpl36', 'Rpl36; ribosomal protein L36', 'proteolytic subunit of the Clp protease', 'ribosoaml protein L36', "product='ribosomal protein L36", '50S ribosomal protein L36, chloroplastic'],
    "rpoA":     ['RNA polymerase alpha subunit', 'RpoA', 'RNA polymerase alpha chain', 'RNA polymerase a-subunit', 'RNA polymerase subunit alpha', 'DNA-directed RNA polymerase alpha subunit', 'DNA-directed RNA polymerase alpha chain', 'RNA polymerase alphasubunit', 'RNA polymerasealpha subunit', 'RNApolymerasealphasubunit', 'rpoA protein', 'RpoA; RNA polymerase alpha subunit', 'RNA polymerase alpha', 'RNApolymerase alpha subunit', 'DNA0-directed RNA polymerase alpha subunit', 'alpha subunit of RNA polymerase', 'RNA polymerase alpha subunit protein', 'RNA polymerase subunit A', 'DNA-directed RNA polymerase alpha protein', 'RNA polymerase alpha-subunit', 'RNA polymerase α-subunit', 'RNA polymerase alpha-chain'],
    "rpoB":     ['RNA polymerase beta subunit', 'RpoB', 'RNA polymerase beta chain', 'RNA polymerase b-subunit', 'RNA polymerase subunit beta', 'DNA-directed RNA polymerase beta subunit', 'RNA polymerase subunit', 'DNA-directed RNA polymerase beta chain', 'RNA polymerase beta subunit II', 'RNA polymerase bsubunit', 'RNApolymerase beta subunit', 'rpoB protein', 'Glutamate 5-kinase', 'one of four subunits of the minimal PEP RNA polymerase catalytic core', 'RpoB; RNA polymerase beta subunit', 'beta subunit of RNA polymerase', 'DNA-directed RNA polymerase beta protein', 'RNA polymerase B'],
    "rpoC1":    ["RNA polymerase beta' subunit", 'RNA polymerase beta', 'RpoC1', "RNA polymerase beta' chain", "RNA polymerase subunit beta'", "RNA polymerase beta' subunit-1", 'RNA polymerase beta I subunit', 'RNA polymerase beta subunit-1', 'RNA polymerase subunit C1', 'RNApolymerasebeta', "RNA polymerase b'subunit", 'rpoC1 protein', "RNA polymerase beta' subunit 1", 'DNA-directed RNA polymerase subunit gamma', "RpoC1; RNA polymerase beta' subunit", "beta' subunit of RNA polymerase", "RNA polymerase beta'", 'RNA polymerasebeta', "DNA-directed RNA polymerase beta' protein", "RNA polymerase b'-subunit-1", 'RNA polymerase beta I chain', "RNA polymerase' beta subunit", 'RNA polymerase C'],
    "rpoC2":    ["RNA polymerase beta'' subunit", "RNA polymerase beta''subunit", 'RpoC2', "RNA polymerase beta'' chain", "RNA polymerase b'-subunit", 'RNA polymerase b subunit', "RNA polymerase subunit beta''", "DNA-directed RNA polymerase beta' subunit", "RNA polymerase beta subunit' subunit", "DNA-directed RNA polymerase beta' chain", "RNA polymerase beta' subunit-2", 'RNA polymerase betasubunit', 'RNA polymerase beta II subunit', 'RNA polymerase beta subunit-2', "RNA polymerase beta subunit'' subunit", "DNA-directed RNA polymerase beta'' subunit", "DNA-directed RNA polymerase beta'' chain", "RNA polymerase b''-subunit", "RNA polymerase beta'''' subunit", 'rpoC2 protein', "RNA polymerase beta' subunit 2", "RpoC2; RNA polymerase beta'' subunit", "RNA polymerase beta ' subunit", 'RNA polymerase protein C2', "bet'' subunit of RNA polymerase", "RNA polymerase beta '' subunit", 'RNA polymerse beta II subunit', "tRNA polymerase beta'' subunit", 'RNA poymerase beta subunit-2', 'RNA polymerase beta subunit 2', 'RNA polymerasebetasubunit', "DNA-directed RNA polymerase beta'' protein", "RNA polymerase b'-subunit-2", 'RNA polymerase beta II chain', "beta'' subunit of RNA polymerase", 'RNApolymerasebetasubunit'],
    "rps11":    ['ribosomal protein S11', '30S ribosomal protein S11', 'chloroplast 30S ribosomal protein S11', '40S ribosomal protein S11', 'small subunit ribosomal protein S11e', 'rps11 protein', "ribosomal protein S11'", 'rps11', 'Rps11; ribosomal protein S11', 'ribosoma lprotein S11', 'rps11 ribosomal protein S11', '30S ribosomal protein S11, chloroplastic'],
    "rps12":    ['ribosomal protein S12', '30S ribosomal protein S12', 'small subunit ribosomal protein S12', 'ribosonal protein S12', 'ribosomal protein S1', 'rps12 protein', 'rps12', 'rps12 CDS', 'ribsomal protein S12', 'ribosomal protein S12, 3', 'ribosmal protein S12', 'ribosomal proteinv S12', 'protease', 'rp12', 'ribosomal protein 12', '30S ribosomal protein S12-B, chloroplastic', 'ribosomal protein S12_5end', 'Rps12; ribosomal protein S12'],
    "rps14":    ['ribosomal protein S14', '30S ribosomal protein S14', '40S ribosomal protein S14', 'ribosomalproteinS14', 'chloroplast 30S ribosomal protein S14', 'small subunit ribosomal protein S14e', 'rps14 protein', 'ribsoomal protein S14', "ribosomal protein S14'", 'rps14', 'Rps14; ribosomal protein S14', '30S ribosomal protein S14, chloroplastic', 'ribosomal proteinS14'],
    "rps15":    ['ribosomal protein S15', '30S ribosomal protein S15', '40S ribosomal protein S15', 'small subunit ribosomal protein S15', 'ribosomal proteinS15', 'rps15 protein', 'rps15', 'ribosomoal protein S15', 'ribosomal proteins S15', 'ribosomal protein S 15', 'protein S15', '30S ribosomal protein S15, chloroplastic', 'Rps15; ribosomal protein S15'],
    "rps16":    ['ribosomal protein S16', '30S ribosomal protein S16', 'ribosomal protein 16', 'ribosomal protsin S16', 'small subunit ribosomal protein S16', 'ribosomal product L16', 'rps16', 'ribosomal protein S subunit 16', '30S ribosomal protein S16, chloroplastic', 'ribosomal proteinS16'],
    "rps18":    ['ribosomal protein S18', '30S ribosomal protein S18', '40S ribosomal protein S18', 'chloroplast 30S ribosomal protein S18', 'small subunit ribosomal protein S18', 'ribosomal protein 18', 'rps18 protein', 'rps18', 'Rps18; ribosomal protein S18', 'ribosomal protein L18'],
    "rps19":    ['ribosomal protein S19', '30S ribosomal protein S19', 'ribosomal protein L19', '40S ribosomal protein S19', 'small subunit ribosomal protein S19e', 'rps19 protein', 'rps19', 'Rps19; ribosomal protein S19', 'ribosomal protein 19', 'ribosomal protein S19i', '30S ribosomal protein S19, chloroplastic'],
    "rps2":     ['ribosomal protein S2', '30S ribosomal protein S2', 'Disease resistance protein RPS2', 'chloroplast 30S ribosomal protein S2', 'small subunit ribosomal protein S21', 'ribosomal protein S20', 'rps2 protein', 'chloropalst 30S ribosomal protein S2', 'ribosomal protein S2product: ribosomal protein S2', 'rps2', 'Rps2; ribosomal protein S2', 'ribosomal protine S2', '30s r-protein CS2', 'ribosomal protein S subunit 2', 'photosystem protein S2', '30S ribosomal protein S2, chloroplastic', 'ribosomal protein S', 'ribosomal proteinS2'],
    "rps3":     ['ribosomal protein S3', '30S ribosomal protein S3', 'Disease resistance protein RPM1', 'chloroplast 30S ribosomal protein S3', 'small subunit ribosomal protein S3e', 'rps3 protein', 'rps3', 'Rps3; ribosomal protein S3', '40S ribosomal protein S3', 'ribosomal protein S subunit 3', 'ribosomal prtoein S3', '30S ribosomal protein S3, chloroplastic'],
    "rps4":     ['ribosomal protein S4', '30S ribosomal protein S4', 'small ribosomal protein 4', 'Disease resistance protein RPS4', 'chloroplast 30S ribosomal protein S4', 'small subunit ribosomal protein S4', 'rps4 protein', 'ribsoomal protein S4', "ribosomal protein S4''", 'Disease resistance protein (TIR-NBS-LRR class) family', 'rps4', 'Rps4; ribosomal protein S4', '40S ribosomal protein S4', 'ribosomal protein S4 protein', 'ribosomal protein subunit 4', '30S ribosomal protein S4, chloroplastic', '30S ribosomal protein S', 'ribosomal proteinS4'],
    "rps7":     ['ribosomal protein S7', '30S ribosomal protein S7', 'chloroplast 30S ribosomal protein S7', 'small subunit ribosomal protein S7e', 'small subunit ribosomal protein S7', 'rps7 protein', 'rps7', '30S ribosomal protein S7, chloroplastic', 'Rps7; ribosomal protein S7'],
    "rps8":     ['ribosomal protein S8', '30S ribosomal protein S8', '40S ribosomal protein S8', 'chloroplast 30S ribosomal protein S8', 'small subunit ribosomal protein S8e', 'ribosomal protein S6', 'ribosomalproteinS8', 'rps8 protein', 'rps8', 'Rps8; ribosomal protein S8', 'ribosomalprotein S8', '30S ribosomal protein S8, chloroplastic', 'ribsomal protein S8'],
    "rrn16S":   ['16S ribosomal RNA', 'small subunit ribosomal RNA', 'Rrn16', 'ribosomal 16S RNA', 'rrn16S', 'ribosomal RNA'],
    "rrn23S":   ['23S ribosomal RNA', 'large subunit ribosomal RNA', '23 ribosomal RNA', '4.5S ribosomal RNA protein', 'Rrn23', '23S ribosmal RNA', 'ribosomal 23S ribosomal RNA', 'ribosomal 23S RNA'],
    "rrn4.5S":  ['4S ribosomal RNA', '4.5S ribosomal RNA', '45S ribosomal RNA', 'Rrn4.5', 'ribosomal 4.5S RNA'],
    "rrn5S":    ['5S ribosomal RNA', 'Rrn5', 'S5 ribosomal RNA', 'ribosomal 5S RNA'],
    "ycf1":     ['Ycf1 protein', 'ycf1'],
    "ycf2":     ['Ycf2 protein', 'ycf2', 'Ycf2'],
    "tRNA-Met": ['fMet', 'tRNA-fMet'],
    "ycl2":     ['Ycl2 protein', 'ycl2'],
}


var colorMitochondrial = {
    "-": "#FFFFFF",

    "COI": "#FF6347", "COII": "#4682B4", "COIII": "#FF4500",
    "tRNA-Met": "#32CD32", "tRNA-Gln": "#DA70D6", "tRNA-Lys": "#7FFF00", "tRNA-Ile": "#FFA07A", "tRNA-Trp": "#BA55D3",
    "tRNA-Cys": "#4169E1", "tRNA-Tyr": "#8B008B", "tRNA-Leu": "#6A5ACD", "tRNA-Asp": "#20B2AA", "tRNA-His": "#8B4513",
    "tRNA-Thr": "#1E90FF", "tRNA-Pro": "#B22222", "tRNA-Ser": "#CD5C5C", "tRNA-Val": "#5F9EA0", "tRNA-Gly": "#3CB371",
    "tRNA-Ala": "#FFD700", "tRNA-Arg": "#483D8B", "tRNA-Asn": "#9ACD32", "tRNA-Glu": "#2E8B57", "tRNA-Phe": "#8A2BE2",

    "ND1": "#FA8072", "ND2": "#C71585", "ND3": "#FF1493", "ND4": "#9932CC", "ND4L": "#00CED1", "ND5": "#9400D3", "ND6": "#FF00FF",
    "ATP8": "#8FBC8F", "ATP6": "#6495ED",
    "16S": "#00FA9A", "12S": "#00BFFF",
    "CYTB": "#F08080",
    "CR": "#DB7093",
    "OL": "#ADFF2F", "OH": "#FFB6C1",

    "accD": "#BC8F8F", "atpA": "#B0E0E6", "atpB": "#00008B", "atpE": "#008B8B", "atpF": "#B8860B", "atpH": "#556B2F", "atpI": "#FF8C00",
    "ccsA": "#703642", "cemA": "#7B68EE", "chlB": "#DAA520", "chlL": "#A0522D", "chlN": "#6B8E23", "clpP": "#CD853F", "clpP1": "#808000",
    "cysA": "#87CEFA", "cysT": "#DEB887", "ftsH": "#C0C0C0", "infA": "#87CEEB", "lhbA": "#FF6347", "matK": "#40E0D0", "ndhA": "#EE82EE",
    "ndhB": "#F5DEB3", "ndhC": "#FFFF00", "ndhD": "#9ACD32", "ndhE": "#696969", "ndhF": "#800000", "ndhG": "#66CDAA", "ndhH": "#0000CD",
    "ndhI": "#BA55D3", "ndhJ": "#9370DB", "ndhK": "#3CB371", "pafI": "#7FFFD4", "pafII": "#FFDAB9", "pbf1": "#48D1CC", "petA": "#C71585",
    "petB": "#191970", "petD": "#F5FFFA", "petE": "#FFE4E1", "petG": "#FFE4B5", "petL": "#FFDEAD", "petN": "#000080", "psaA": "#FDF5E6",
    "psaB": "#808080", "psaC": "#8B0000", "psaI": "#BDB76B", "psaJ": "#8B008B", "psaM": "#556B2F", "psb30": "#FF4500", "psbA": "#DEB890",
    "psbB": "#663399", "psbC": "#FF0000", "psbD": "#98FB98", "psbE": "#AFEEEE", "psbF": "#DB7093", "psbG": "#FFEFD5", "psbH": "#FFD700",
    "psbI": "#CD853F", "psbJ": "#FFC0CB", "psbK": "#DDA0DD", "psbL": "#B0C4DE", "psbM": "#00FF7F", "psbN": "#48D1CC", "psbT": "#C71585",
    "psbZ": "#191970", "rbcL": "#F5F5F5", "rpl14": "#FFE4C4", "rpl16": "#008080", "rpl2": "#FAEBD7", "rpl20": "#D2B48C", "rpl21": "#FFFAF0",
    "rpl22": "#F0FFF0", "rpl23": "#228B22", "rpl32": "#FF00FF", "rpl33": "#DCDCDC", "rpl36": "#F8F8FF", "rpoA": "#FFFAFA", "rpoB": "#00FA9A",
    "rpoC1": "#B0E0DD", "rpoC2": "#FFFACD", "rps11": "#ADD8E6", "rps12": "#F08080", "rps14": "#E0FFFF", "rps15": "#FAFAD2", "rps16": "#D3D3D3",
    "rps18": "#90EE90", "rps19": "#FFB6C1", "rps2": "#FFA07A", "rps3": "#20B2AA", "rps4": "#87CEFA", "rps7": "#778899", "rps8": "#B0C4DE",
    "rrn16S": "#FFFFE0", "rrn23S": "#00FFFF", "rrn4.5S": "#32CD32", "rrn5S": "#FAF0E6", "ycf2": "#800080", "ycf1": "#66CDAA", "ycl2": "#0000FF"
};

// Verify if each color is unique
//let colorSet = new Set(Object.values(colorMitochondrial));
//if (colorSet.size === Object.keys(colorMitochondrial).length) {
//    console.log("All genes have unique colors.");
//} else {
//    console.error("Color repetition detected, please check. Unique colors assigned:", colorSet.size);
//}









async function fetchGenomicData(ids, geneList, genomeType, geneStart) {
    let progress = 0;

    function updateProgressBar(current, total) {
        const progressBar = document.getElementById('progressBar');
        const percentage = (current / total) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('aria-valuenow', percentage);
        progressBar.textContent = `${percentage.toFixed(2)}%`;
    }

    const processVoucher = async (voucherId) => {
        const url = `https://www.ncbi.nlm.nih.gov/sviewer/viewer.cgi?tool=portal&save=file&log$=seqview&db=nuccore&report=gbc_xml&id=${voucherId}&conwithfeat=on&withparts=on&show-sequence=on&hide-cdd=on`;
        try {
            const response = await fetch(url);
            const data = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const features = xml.querySelectorAll("INSDFeature");
            const sequence = xml.querySelector("INSDSeq_sequence").textContent;

            const geneData = {};
            const geneSequences = {};
            const geneStrands = [];
            const geneLengths = [];
            const geneNames = [];

            features.forEach(feature => {
                const featureKey = feature.querySelector("INSDFeature_key").textContent;
                if (geneList.includes(featureKey)) {
                    const qualifiers = feature.querySelectorAll("INSDFeature_quals > INSDQualifier");
                    const start = parseInt(feature.querySelector("INSDInterval > INSDInterval_from").textContent) - 1;
                    const end = parseInt(feature.querySelector("INSDInterval > INSDInterval_to").textContent);
                    const strand = start > end ? '-' : '+';
                    const length = Math.abs(end - start) + 1;
                    let geneName = null;

                    qualifiers.forEach(qualifier => {
                        if (qualifier.querySelector("INSDQualifier_name").textContent === "product") {
                            geneName = qualifier.querySelector("INSDQualifier_value").textContent;
                            if (genomeType === 'Mitochondrial') {
                                for (const key in MitochondrialGenes) {
                                    if (MitochondrialGenes[key].includes(geneName)) {
                                        geneName = key;
                                        break;
                                    }
                                }
                            } else if (genomeType === 'Chloroplast') {
                                for (const key in ChloroplastGenes) {
                                    if (ChloroplastGenes[key].includes(geneName)) {
                                        geneName = key;
                                        break;
                                    }
                                }
                            }
                            geneNames.push(geneName);
                        }
                    });

                    if (geneName) {
                        const geneSeq = strand === '+' ? sequence.substring(start, end) : sequence.substring(end - 1, start + 1);
                        geneSequences[geneName] = geneSeq.toUpperCase();
                        if (!geneData[geneName]) {
                            geneData[geneName] = [];
                        }
                        geneData[geneName].push({ length, start, end, strand, geneName });
                    }
                    geneStrands.push(strand);
                    geneLengths.push(length);
                }
            });

            const speciesNames = Array.from(xml.querySelectorAll("INSDSeq_organism")).map(org => org.textContent);
            const vouchers = Array.from(xml.querySelectorAll("INSDSeq_accession-version")).map(voucher => voucher.textContent);

            // Reorder geneNames and geneStrands to start with geneStart
            const geneStartIndex = geneNames.indexOf(geneStart);
            let geneOrderStr;
            if (geneStartIndex > -1) {
                const reorderedGeneNames = geneNames.slice(geneStartIndex).concat(geneNames.slice(0, geneStartIndex));
                const reorderedGeneStrands = geneStrands.slice(geneStartIndex).concat(geneStrands.slice(0, geneStartIndex));

                geneOrderStr = reorderedGeneNames.map((gene, index) => {
                    const shortGene = gene.startsWith('tRNA') ? gene.replace('tRNA-', '') : gene;
                    return reorderedGeneStrands[index] === '-' ? `-${shortGene}` : shortGene;
                }).join(',');
            } else {
                geneOrderStr = geneNames.map((gene, index) => {
                    const shortGene = gene.startsWith('tRNA') ? gene.replace('tRNA-', '') : gene;
                    return geneStrands[index] === '-' ? `-${shortGene}` : shortGene;
                }).join(',');
            }

            return {
                speciesNames,
                geneOrder: geneOrderStr,
                vouchers,
                genes: geneNames,
                strands: geneStrands,
                lengths: geneLengths,
                sequence,
                geneSequences,
                geneData,
                pseudoGenes: processPseudoGenes(geneData)
            };

        } catch (error) {
            console.error(error);
            return null;
        } finally {
            progress++;
            updateProgressBar(progress, ids.length);
        }
    };

    const results = await Promise.all(ids.map(processVoucher));
    return results.filter(result => result !== null);
}


function processPseudoGenes(geneData) {
    const pseudoGenes = [];
    for (const gene in geneData) {
        if (geneData[gene].length > 1) {
            pseudoGenes.push({ gene, info: geneData[gene] });
        }
    }
    return pseudoGenes;
}


function createSVG(genomicData, geneStart, geneList, pattern = false) {
    console.log('createSVG called with:', { genomicData, geneStart, geneList, pattern });

    const patternMap = new Map();
    let patternCounter = 1;

    if (pattern) {
        genomicData.forEach(data => {
            let { speciesNames, vouchers, genes, strands, lengths, pseudoGenes, geneOrder } = data;

            if (!patternMap.has(geneOrder)) {
                patternMap.set(geneOrder, {
                    id: `Pattern ${toRoman(patternCounter++)}`,
                    genes: [...genes],
                    strands: [...strands],
                    lengths: [...lengths],
                    pseudoGenes: [...pseudoGenes],
                    geneOrder,
                    species: []
                });
            }
            patternMap.get(geneOrder).species.push({ speciesNames, vouchers });
        });

        genomicData = Array.from(patternMap.values()).map(patternData => ({
            speciesNames: patternData.species.map(speciesData => Array.isArray(speciesData.speciesNames) ? speciesData.speciesNames.join(", ") : speciesData.speciesNames).join("; "),
            vouchers: patternData.species.map(speciesData => Array.isArray(speciesData.vouchers) ? speciesData.vouchers.join(", ") : speciesData.vouchers).join("; "),
            genes: patternData.genes,
            strands: patternData.strands,
            lengths: patternData.lengths,
            pseudoGenes: patternData.pseudoGenes,
            geneOrder: patternData.geneOrder,
            id: patternData.id
        }));
    }

    // Clear the existing SVG containers
    document.querySelectorAll('.svg-container').forEach(container => container.remove());

    genomicData.forEach(data => {
        let { speciesNames, vouchers, genes, strands, lengths, pseudoGenes, geneOrder, id } = data;
        const nomeEspecie = speciesNames;
        const voucher = vouchers;

        console.log('Processing genomic data for:', { nomeEspecie, voucher, genes, geneOrder });

        const pieceWidth = 125;
        const pieceHeight = pieceWidth / 2;
        const tRNAWidth = pieceWidth;
        const safeVoucher = String(voucher).replace(/[^a-zA-Z0-9-_]/g, '_');

        const preferidos = [geneStart];
        let startGene = preferidos.find(gene => genes.includes(gene));
        if (startGene) {
            const indexInicio = genes.indexOf(startGene);
            genes = [...genes.slice(indexInicio), ...genes.slice(0, indexInicio)];
            strands = [...strands.slice(indexInicio), ...strands.slice(0, indexInicio)];
            lengths = [...lengths.slice(indexInicio), ...lengths.slice(0, indexInicio)];
        }

        const svgNS = "http://www.w3.org/2000/svg";
        let svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", `svg-${safeVoucher}`);

        const svgWidth = genes.reduce((acc, produto) => acc + (produto.startsWith('tRNA') ? tRNAWidth : pieceWidth), 0);

        svg.setAttribute("width", svgWidth.toString());
        svg.setAttribute("height", "150");
        svg.setAttribute("viewBox", `0 50 ${svgWidth} 150`);

        let textEspecie = document.createElementNS(svgNS, "text");
        textEspecie.setAttribute("x", "10");
        textEspecie.setAttribute("y", "70");
        textEspecie.setAttribute("fill", "black");
        textEspecie.setAttribute("font-size", "20px");

        let italicEspecie = document.createElementNS(svgNS, "tspan");
        italicEspecie.setAttribute("font-style", "italic");

        if (pattern) {
            italicEspecie.textContent = `${id}: `;
            textEspecie.appendChild(italicEspecie);

            patternMap.get(geneOrder).species.forEach(speciesData => {
                let speciesVoucher = document.createElementNS(svgNS, "tspan");
                speciesVoucher.setAttribute("font-style", "italic");
                speciesVoucher.textContent = `${speciesData.speciesNames} `;
                textEspecie.appendChild(speciesVoucher);

                let boldVoucher = document.createElementNS(svgNS, "tspan");
                boldVoucher.setAttribute("font-weight", "bold");
                boldVoucher.textContent = `(${speciesData.vouchers}) `;
                textEspecie.appendChild(boldVoucher);
            });
        } else {
            italicEspecie.textContent = `${nomeEspecie} `;
            textEspecie.appendChild(italicEspecie);

            let boldVoucher = document.createElementNS(svgNS, "tspan");
            boldVoucher.setAttribute("font-weight", "bold");
            boldVoucher.innerHTML = `
                (<a href="https://www.ncbi.nlm.nih.gov/nuccore/${voucher}" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-html="true" title="View in GenBank">${voucher}</a>)
            `;
            textEspecie.appendChild(boldVoucher);
        }

        if (!pattern && pseudoGenes.length > 0) {
            let _pseudoGenes = pseudoGenes.map(pseudoGene => pseudoGene.gene.replace('tRNA-', '')).join(', ');
            textEspecie.innerHTML += ` - Duplicate genes: ${_pseudoGenes}`;
        }

        svg.appendChild(textEspecie);

        let currentX = 0;

        genes.forEach((produto, index) => {
            const isTRNA = produto.startsWith('tRNA');
            const pieceW = isTRNA ? tRNAWidth : pieceWidth;
            const pieceH = pieceHeight;

            let path = document.createElementNS(svgNS, "path");
            path.setAttribute("data-index", index);
            let d = `M ${currentX},80 
                     L ${currentX + pieceW},80 
                     L ${currentX + pieceW},${80 + pieceH} 
                     L ${currentX},${80 + pieceH} Z`;

            if (index > 0) {
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

            if (index < genes.length - 1) {
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
            let len = lengths[index] ? lengths[index].toString().replace('-', '') : 'N/A';
            path.setAttribute("title", `Gene: <b>${produto}</b><br>Length: <b>${len} bp</b><br>Strand: ${strands[index] === '+' ? '<b>light</b>' : '<b>heavy</b>'}`);

            let text = document.createElementNS(svgNS, "text");
            text.setAttribute("x", (currentX + pieceW / 2).toString());
            text.setAttribute("y", (80 + pieceH / 2).toString());
            text.setAttribute("fill", "#000000");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("font-weight", "bold");
            text.setAttribute("font-size", "15px");
            text.textContent = isTRNA ? produto.replace('tRNA-', '') : produto;

            svg.appendChild(path);
            svg.appendChild(text);

            let editIcon = document.createElementNS(svgNS, "text");
            editIcon.setAttribute("x", (currentX + pieceW / 2).toString());
            editIcon.setAttribute("y", (70 + pieceH).toString());
            editIcon.setAttribute("fill", "#000000");
            editIcon.setAttribute("text-anchor", "middle");
            editIcon.setAttribute("font-size", "15px");
            editIcon.setAttribute("cursor", "pointer");
            editIcon.setAttribute("data-bs-toggle", "tooltip");
            editIcon.setAttribute("title", "Edit this Gene");
            editIcon.textContent = "✎";
            editIcon.onclick = () => openEditModal(produto, index, genes, strands, lengths, data, geneOrder, pattern);

            svg.appendChild(editIcon);

            const isPseudoGene = pseudoGenes.some(pg => pg.gene === produto);
            const isNewGene = lengths[index] === 0;

            if (isPseudoGene) {
                let asterisk = document.createElementNS(svgNS, "text");
                asterisk.setAttribute("x", (currentX + pieceW / 2).toString());
                asterisk.setAttribute("y", '170');
                asterisk.setAttribute("fill", "#202020");
                asterisk.setAttribute("text-anchor", "middle");
                asterisk.setAttribute("font-size", "25px");
                asterisk.textContent = "*";
                svg.appendChild(asterisk);
            }

            if (isNewGene && produto !== '-') {
                let hash = document.createElementNS(svgNS, "text");
                hash.setAttribute("x", (currentX + pieceW / 2).toString());
                hash.setAttribute("y", '185');
                hash.setAttribute("fill", "#202020");
                hash.setAttribute("text-anchor", "middle");
                hash.setAttribute("font-size", "25px");
                hash.textContent = "#";
                hash.setAttribute("data-bs-toggle", "tooltip");
                hash.setAttribute("data-bs-placement", "bottom");
                hash.setAttribute("data-bs-custom-class", "custom-tooltip");
                hash.setAttribute("data-bs-html", "true");
                hash.setAttribute("title", "Click to remove");
                hash.onclick = () => {
                    if (confirm("Are you sure you want to remove this gene?")) {
                        const tooltipInstance = bootstrap.Tooltip.getInstance(hash);
                        if (tooltipInstance) {
                            tooltipInstance.dispose();
                        }
                        removerElemento(index);
                    }
                };
                svg.appendChild(hash);
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

            if (!pattern && index > 0) {
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

        let container = document.createElement("div");
        container.setAttribute("id", `container-${safeVoucher}`);
        container.classList.add('svg-container');
        container.style.width = "100%";
        container.style.overflowX = "auto";
        container.style.marginTop = "2.5px";
        container.style.marginBottom = "2.5px";
        container.appendChild(svg);
        document.getElementById('svgContainer').appendChild(container);

        syncScroll();

        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    });

    function openEditModal(geneName, index, genes, strands, lengths, data, geneOrder, pattern) {
        console.log('Opening edit modal for gene:', geneName);
        const modalContent = `
            <div class="modal fade" id="editGeneModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header h3 bg-dark text-white">
                            <h5 class="modal-title" id="editGeneModalLabel">Rename <b>${geneName}</b></h5>
                        </div>
                        <div class="modal-body">
                            <label for="newGeneName">Rename <b>${geneName}</b> to:</label>
                            <select id="newGeneName" class="form-control form-control-lg">
                                ${geneList.map(gene => `<option value="${gene}">${gene}</option>`).join('')}
                            </select>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="strand" id="strandPlus" value="+" ${strands[index] === '+' ? 'checked' : ''}>
                                <label class="form-check-label" for="strandPlus"><b>+</b> (Line above)</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="strand" id="strandMinus" value="-" ${strands[index] === '-' ? 'checked' : ''}>
                                <label class="form-check-label" for="strandMinus"><b>-</b> (Line below)</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="saveEditGeneButton">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalContent);
        $('#editGeneModal').modal('show');

        $('#saveEditGeneButton').off('click').on('click', function () {
            const newGeneName = $('#newGeneName').val();
            const newStrand = $('input[name="strand"]:checked').val();
            console.log('Saving new gene name:', newGeneName, 'with strand:', newStrand);

            // Update genes and strands arrays
            genes[index] = newGeneName;
            strands[index] = newStrand;

            // Update geneOrder
            const newGeneOrder = geneOrder.split(',').slice();
            newGeneOrder[index] = newStrand === '-' ? `-${newGeneName}` : newGeneName;
            data.geneOrder = newGeneOrder.join(',');

            // Update genes in the data object
            data.genes = genes;

            // If pattern is true, update all instances in patternMap
            if (pattern) {
                patternMap.get(geneOrder).species.forEach(speciesData => {
                    genomicData.forEach(genome => {
                        if (genome.geneOrder === geneOrder) {
                            genome.genes[index] = newGeneName;
                            genome.strands[index] = newStrand;
                            genome.geneOrder = newGeneOrder.join(',');
                        }
                    });
                });
            }

            // Debugging information
            console.log('Updated data:', data);
            console.log('Updated genes:', genes);
            console.log('Updated geneOrder:', data.geneOrder);

            createSVG(genomicData, geneStart, geneList, pattern);
            $('#editGeneModal').modal('hide');
            $('#editGeneModal').remove();
        });
    }
}

function toRoman(num) {
    const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let result = '';
    for (const { value, numeral } of romanNumeralMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}





// Sincroniza o scroll de todos os elementos SVG
function syncScroll() {
    const containers = document.querySelectorAll('.svg-container');
    containers.forEach(container => {
        container.onscroll = function () {
            const scrollLeft = container.scrollLeft;
            containers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    otherContainer.scrollLeft = scrollLeft;
                }
            });
        };
    });
}


function ListGenes(object, typeGenome) {
    const data = object;
    const _genesToFasta = $('#genesToFasta'); // Usando jQuery para selecionar o elemento
    const cdsGenes = new Set();
    const rrnaGenes = new Set();
    const trnaGenes = new Set();
    const ChloroplastGenes = new Set();

    // Definindo as listas de genes para cada categoria
    const cdsList   = ['ATP6', 'ATP8', 'COI', 'COII', 'COIII', 'CYTB', 'ND1', 'ND2', 'ND3', 'ND4', 'ND4L', 'ND5', 'ND6'].sort();
    const rrnaList  = ['12S', '16S'].sort();
    const trnaList  = ['tRNA-Ala', 'tRNA-Arg', 'tRNA-Asn', 'tRNA-Asp', 'tRNA-Cys', 'tRNA-Gln', 'tRNA-Glu', 'tRNA-Gly', 'tRNA-His', 'tRNA-Ile', 'tRNA-Leu', 'tRNA-Lys', 'tRNA-Met', 'tRNA-Phe', 'tRNA-Pro', 'tRNA-Ser', 'tRNA-Thr', 'tRNA-Trp', 'tRNA-Tyr', 'tRNA-Val'].sort();
    const cpList    = ['accD', 'atpA', 'atpB', 'atpE', 'atpF', 'atpH', 'atpI', 'ccsA', 'cemA', 'chlB', 'chlL', 'chlN', 'clpP', 'clpP1', 'cysA', 'cysT', 'ftsH', 'infA', 'lhbA', 'matK', 'ndhA', 'ndhB', 'ndhC', 'ndhD', 'ndhE', 'ndhF', 'ndhG', 'ndhH', 'ndhI', 'ndhJ', 'ndhK', 'pafI', 'pafII', 'pbf1', 'petA', 'petB', 'petD', 'petE', 'petG', 'petL', 'petN', 'psaA', 'psaB', 'psaC', 'psaI', 'psaJ', 'psaM', 'psb30', 'psbA', 'psbB', 'psbC', 'psbD', 'psbE', 'psbF', 'psbG', 'psbH', 'psbI', 'psbJ', 'psbK', 'psbL', 'psbM', 'psbN', 'psbT', 'psbZ', 'rbcL', 'rpl14', 'rpl16', 'rpl2', 'rpl20', 'rpl21', 'rpl22', 'rpl23', 'rpl32', 'rpl33', 'rpl36', 'rpoA', 'rpoB', 'rpoC1', 'rpoC2', 'rps11', 'rps12', 'rps14', 'rps15', 'rps16', 'rps18', 'rps19', 'rps2', 'rps3', 'rps4', 'rps7', 'rps8', 'rrn16S', 'rrn23S', 'rrn4.5S', 'rrn5S', 'ycf2', 'ycf1', 'ycl2'].sort();

    _genesToFasta.empty();
    _genesToFasta.append($('<option>').text('Choose a gene').attr('value', 'NaN'));

    if (typeGenome === 'Mitochondrial') {
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
    addOptions('CDS', cdsGenes);
    addOptions('rRNAs', rrnaGenes);
    addOptions('tRNAs', trnaGenes);

} else if (typeGenome === 'Chloroplast') {
    const cp = Object.keys(data);
    cp.forEach((id) => {
        data[id].genes.forEach((gene) => {
            if (cpList.includes(gene)) {
                ChloroplastGenes.add(gene);
            }
        });
    });
    addOptions('Chloroplast Genes', ChloroplastGenes);
}

    function addOptions(groupName, geneSet) {
        if (geneSet.size > 0) {
            _genesToFasta.append($('<option>').text(`-- ${groupName} --`).attr('disabled', 'disabled'));
            Array.from(geneSet).sort().forEach((gene) => {
                _genesToFasta.append($('<option>').text(gene).attr('value', gene));
            });
        }
    }
    
}




var svgPlot = document.getElementById('svgPlot');
let mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "svgContainer");
mainContainer.style.width = "100%";
mainContainer.style.overflowX = "auto";
svgPlot.appendChild(mainContainer);



function showResults(dataGenomes, typeGenome) {
    ListGenes(dataGenomes, typeGenome);
    const _Results = document.getElementById('PUMASResults');
    _Results.style.display = 'block';

    const downloadIndivivualPlot = document.getElementById('downloadIndivivualPlot');
    const individualPlot = document.getElementById('individualPlot');
    const LinearGenome = document.getElementById('LinearGenome');
    const ViewGenomeDraw = $('#ViewGenomeDraw'); // jQuery selector

    const data = Object.keys(dataGenomes);
    $('#individualPlot').empty();
    $('#individualPlot').append($('<option>').text('Choose a species').attr('value', 'NaN'));
    data.forEach((id) => {
        $('#individualPlot').append($('<option>').text(`${dataGenomes[id].speciesNames.join(", ")} - (${dataGenomes[id].vouchers.join(", ")})`).attr('value', id));
    });

    individualPlot.addEventListener('change', function () {
        downloadIndivivualPlot.disabled = individualPlot.value === 'NaN';
    });

    // Remove old event listeners to avoid duplication
    $('#ViewPlotColor').off('click');
    $('#ViewPlotFormat').off('click');
    $('#ViewPlotDownload').off('click');

    // Remove previous genomeDraw instance if it exists
    if (window.genomeDraw) {
        window.genomeDraw.clear();
        window.genomeDraw = null;
    }

    downloadIndivivualPlot.addEventListener('click', function () {
        const id = individualPlot.value;

        // Hide and clear the previous modal content
        if (ViewGenomeDraw.hasClass('show')) {
            ViewGenomeDraw.modal('hide');
        }
        $('#ViewPlotTitle').empty();
        $('#ViewPlotFigureCaption').empty();
        $(LinearGenome).empty();

        // Show the modal with new content
        ViewGenomeDraw.modal('show');
        $('#ViewPlotTitle').append(`Genome diagram for <i>${dataGenomes[id].speciesNames.join(", ")}</i> <b>(${dataGenomes[id].vouchers.join(", ")})</b>`);
        $('#ViewPlotFigureCaption').append(`<h4>Genome diagram for <i>${dataGenomes[id].speciesNames.join(", ")}</i> <b>(${dataGenomes[id].vouchers.join(", ")})</b></h4><br><h5>The Colors Scheme is adapted for Color Blindness - Wong, B. (2011). Color blindness. <i>Nature Methods</i>, <i>8</i>(6), 441. https://doi.org/10.1038/nmeth.1618</h5>`);

        // Create a new genomeDraw instance and store it in window object
        window.genomeDraw = new CGV.Viewer('#LinearGenome', {
            name: "data_LuanRabelo",
            id: "data_LuanRabelo",
            height: screen.height,
            width: screen.width,
            showLegend: true,
            showRuler: true,
            showDivider: true,
        });

        // Clear any previous drawing
        window.genomeDraw.clear();

        let dataEntry = generateLinearObject(dataGenomes[id]);

        window.genomeDraw.io.loadJSON(dataEntry);

        $('#ViewPlotColor').on('click', function () {
            window.genomeDraw.invertColors();
        });

        $('#ViewPlotFormat').on('click', function () {
            const format = (window.genomeDraw.format == 'circular') ? 'linear' : 'circular';
            window.genomeDraw.settings.update({ format: format });
            window.genomeDraw.draw();
        });

        $('#ViewPlotDownload').on('click', function () {
            const spName = dataGenomes[id].speciesNames.join("_").replace(/\s/g, '_');
            const height = 4000;
            const width = window.genomeDraw.width / window.genomeDraw.height * height;
            window.genomeDraw.io.downloadImage(width, height, `${spName}.png`);
        });

        window.genomeDraw.draw();
    });
}





function generateLinearObject(dataEntry) {

    const Linear = {
        cgview: {
            version: "1.6.0",
            created: "2024-01-11 12:24:26",
            updated: "2024-01-11 12:24:26",
            format: "linear",
            settings: {
                format: "linear",
                geneticCode: 2,
                backgroundColor: "rgba(255,255,255,1)",
                showShading: false,
                arrowHeadLength: 0.5,
                minArcLength: 1,
                initialMapThicknessProportion: 1.5,
                maxMapThicknessProportion: 1.5
            },
            backbone: {
                color: "rgba(0,0,0,0.5)",
                colorAlternate: "rgba(0,0,0,1)",
                thickness: 1,
                decoration: "arrow"
            },
            ruler: {
                font: "sans-serif,bold,14",
                color: "rgba(0,0,0,1)"
            },
            annotation: {
                font: "sans-serif,bold,20",
                onlyDrawFavorites: false,
                visible: true
            },
            dividers: {
                slot: {
                    visible: true,
                    color: "rgba(0,0,0,0.5)",
                    thickness: 1,
                    spacing: 1
                }
            },
            highlighter: {
                visible: true
            },
            legend: {
                position: "top-right",
                textAlignment: "left",
                defaultFont: "sans-serif,plain,10",
                defaultFontColor: "rgba(0,0,0,1)",
                backgroundColor: "rgba(255,255,255,1)",
                items: [
                    { name: "tRNA", swatchColor: "rgba(0,114,178,1)", decoration: "arrow", font: "sans-serif,bold,20" },
                    { name: "rRNA", swatchColor: "rgba(0,158,115,1)", decoration: "arrow", font: "sans-serif,bold,20" },
                    { name: "PCGs", swatchColor: "rgba(230,159,0,1)", decoration: "arrow", font: "sans-serif,bold,20" },
                    { name: "GC Content", swatchColor: "rgba(0,0,0,1)", decoration: "arc", font: "sans-serif,bold,20" },
                    { name: "GC Skew+", swatchColor: "rgba(204,121,167,1)", decoration: "arc", font: "sans-serif,bold,20" },
                    { name: "GC Skew-", swatchColor: "rgba(86,180,233,1)", decoration: "arc", font: "sans-serif,bold,20" }
                ]
            },
            sequence: {
                font: "sans-serif,plain,20",
                color: "rgba(0,0,0,1)",
                contigs: [
                    {
                        name: 'LuanRabelo',
                        orientation: "+",
                        length: dataEntry.sequence.length,
                        seq: dataEntry.sequence
                    }
                ]
            },
            features: [],
            tracks: [
                {
                    name: "data_LuanRabelo",
                    separateFeaturesBy: "strand",
                    position: "both",
                    thicknessRatio: 2,
                    dataType: "feature",
                    dataMethod: "source",
                    dataKeys: "data_LuanRabelo"
                },
                { "name": "GC Content", "separateFeaturesBy": "strand", "position": "inside", "thicknessRatio": 1, "dataType": "plot", "dataMethod": "sequence", "dataKeys": "gc-content" },
                { "name": "GC Skew", "separateFeaturesBy": "strand", "position": "inside", "thicknessRatio": 1, "dataType": "plot", "dataMethod": "sequence", "dataKeys": "gc-skew" }
            ]
        }
    };

    dataEntry.genes.forEach((geneName, index) => {
        //console.log(dataEntry.geneInfo[geneName][0].start);
        let type = 'PCGs';
        if (geneName.includes('tRNA-')) {
            type = 'tRNA';
        } else if (['12S', '16S'].includes(geneName)) {
            type = 'rRNA';
        }

        let start = dataEntry.geneData[geneName][0].start;
        let end = dataEntry.geneData[geneName][0].end;

        //console.log(geneName, start, end);

        if (end < start) {
            start = dataEntry.geneData[geneName][0].end;
            end = dataEntry.geneData[geneName][0].start;
        }

        Linear.cgview.features.push({
            name: geneName,
            type: type,
            start: start,
            stop: end,
            strand: dataEntry.strands[index] === '+' ? +1 : -1,
            source: "data_LuanRabelo",
            legend: type,
            tags: []
        });
    });

    return Linear;
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
    const scale = 2; // Aumentar a escala para melhorar a qualidade

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