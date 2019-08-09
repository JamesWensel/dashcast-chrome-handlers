const express = require('express');
const app = express(); 
const server = require('http').Server(app); 

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
})

server.listen(8000);