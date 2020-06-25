var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.set('views','./src/views')
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

module.exports = app;