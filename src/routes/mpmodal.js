module.exports = function(app) {

    // SDK de Mercado Pago
    const mercadopago = require ('mercadopago');

    app.get('/modal',function(req,res){

    // Configura credenciais
    mercadopago.configure({
      access_token: 'ACCESS_TOKEN'
    });

    // Cria um objeto de preferência
    let preference = {
      items: [
        {
          title: 'Meu produto',
          unit_price: 20,
          quantity: 1,
        }
      ],
    }
    
    ;
    mercadopago.preferences.create(preference).then(function(response){
      global.id = response.body.id;
      res.render("./modal", {prefResponse:response.body});
    }).catch(function(error){
      console.log(error);
    });
 })
};
