let app = require('./config/server')

let mpmodal = require('./src/routes/mpmodal');
mpmodal(app);

let mpredirect = require('./src/routes/redirect');
mpredirect(app);

let finalizacao = require('./src/routes/fimpago')
finalizacao(app);

const porta = 3000

app.listen(porta,function(){
  console.log(`Servidor executando na porta: ${porta}.`)
});