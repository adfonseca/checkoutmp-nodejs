module.exports = function(app) {
    app.post('/processar_pagamento', function (req, res) {
        //Retorno
        res.send("Pagamento processado");
    });
}