var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
    res.sendfile('./chat.html');
});

io.on('connection', function (socket) {

    socket.on('helloClick', function (data) {
        socket.emit('news', 'hello' );
    });
});

server.listen(8080);