const frontends = [
    {
        name: 'transacoes',
        app: System.import('transacoes'),
        activeWhen: ['/#/transacoes', '/transacoes', location => location.hash.endsWith('#/')],
    },
    {
        name: 'contas',
        app: System.import('contas'),
        activeWhen: ['/#/contas', '/contas']
    },
    {
        name: 'responsaveis',
        app: System.import('responsaveis'),
        activeWhen: ['/#/responsaveis', '/responsaveis']
    }
]

System.import('single-spa').then(function (singleSpa) {
    for (const frontend of frontends) {
        singleSpa.registerApplication(frontend);
    }

    singleSpa.start({
        urlRerouteOnly: true
    })
});

if (window.location.pathname === "/#/") {
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
