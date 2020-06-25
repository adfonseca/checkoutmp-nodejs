module.exports = function(app) {

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

app.post('/custom', function (req, res) {


    mercadopago.configurations.setAccessToken("ACCESS_TOKEN");
    
        var pagamento = req.body;
    
        var payment_data = {
        transaction_amount: parseFloat(pagamento.amount),
        token: pagamento.token,
        description: pagamento.title,
        installments: parseInt(pagamento.installments),
        payment_method_id: pagamento.paymentMethodId,
        payer: {
            email: pagamento.email
        }
        };
    
    
    mercadopago.payment.save(payment_data).then(function (data) {
        console.log(data);
        res.send(data.body.status);
        }).catch(function (error) {
        console.log(error);
        });
    
    });

}