const porta = 3000

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.json());

app.listen(porta,function(){
  console.log(`Servidor executando na porta: ${porta}.`)
});

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

app.get('/',function(req,res){

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
    }
    
    ;
    mercadopago.preferences.create(preference).then(function(response){
      global.id = response.body.id;
      res.render("./index", {prefResponse:response.body});
    }).catch(function(error){
      console.log(error);
    });
});


app.post('/processar_pagamento', function (req, res) {
    //Retorno
    res.send("Pagamento processado");
});