module.exports = function(app) {

    // SDK de Mercado Pago
    const mercadopago = require ('mercadopago');

    app.get('/redirect',function(req,res){

    // Configura credenciais
    mercadopago.configure({
      access_token: 'TEST-1760602428834953-030413-978bd0671d97644d6ac4fb76068d5685-532818857'
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
      "back_urls": {
        "success": "https://conteudo.mercadopago.com.br/",
        "failure": "https://conteudo.mercadopago.com.br/",
        "pending": "https://conteudo.mercadopago.com.br/"
    },
    "auto_return": "approved",
    }
    
    ;
    mercadopago.preferences.create(preference).then(function(response){
      global.init_point = response.body.init_point;
      res.render("./redirect", {prefResponse:response.body});
    }).catch(function(error){
      console.log(error);
    });
 })
};