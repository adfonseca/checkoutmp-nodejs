let app = require('./config/server')

let mpmodal = require('./src/routes/modal');
mpmodal(app);

let mpredirect = require('./src/routes/redirect');
mpredirect(app);

app.get('/customform', function(req, res) {
  res.render('customform', req.query);
});

let mpcustom = require('./src/routes/custom');
mpcustom(app);

const porta = 3000

app.listen(porta,function(){
  console.log(`Servidor executando na porta: ${porta}.`)
});