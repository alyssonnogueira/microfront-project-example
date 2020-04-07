const frontends = [
    {
        "name": "transacoes",
        "selector": "transacoes-root",
        "matchRoute": "/transacoes",
        "isDefaultApp": true
    },
    {
        "name": "contas",
        "selector": "contas-root",
        "matchRoute": "/contas",
        "isDefaultApp": false
    },
    {
        "name": "responsaveis",
        "selector": "responsaveis-root",
        "matchRoute": "/responsaveis",
        "isDefaultApp": false
    }
];

System.import('single-spa').then(function (singleSpa) {
    for (const frontend of frontends) {
        singleSpa.registerApplication(
            frontend.name,
            () => System.import(frontend.name),
            location => locationMatch(location, frontend.matchRoute)
        );
    }
    singleSpa.start();
});

if (window.location.pathname === "/") {
    for (const frontend of frontends) {
        if (frontend.isDefaultApp)
            window.location.href = frontend.matchRoute;
    }
}

var locationMatch = function (location, path) {
    var loc = location.href + location.search;
    if (loc.indexOf(path) !== -1) {
        // carregaConfiguracaoProdutor();
        return true;
    };
    return false;
};

// var carregaConfiguracaoProdutor = function emitEventToMicrofront() {
//     const data = {};
//     data.detail = {
//         data: {
//             habilitarVincularEstimativaNoProjetoTecnico: false,
//             habilitarViabilidadeProdutor: true,
//             habilitarParceirosNegocio: false,
//             habilitarValidacaoProAgro: false,
//             habilitarProjetoTecnicoInvestimento: false,
//             habilitarImovelRural: true,
//             habilitarSemoventes: true,
//             habilitarMaquinasBenfeitorias: true,
//             habilitarImovelUrbano: true,
//             habilitarTransferirProdutor: false,
//             habilitarEditarProdutor: true
//         }
//     };
//     const customEvent = new CustomEvent('servrural-produtor-front:configuracao', data);
//     document.dispatchEvent(customEvent);
//     return true;
// }

// window.onpopstate = function (event) {
//     const produtor = locationMatch(location, 'produtor')
//     if (produtor) {
//         location.reload(true);
//     }
// };
