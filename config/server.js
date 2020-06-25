var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views','./src/views')
app.use(express.json());

module.exports = app;