const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    var currentroom = 'default';
    socket.join(currentroom);
    socket.on('disconnect', () => console.log('a user left us'));

    socket.on('chat message', function (msg) {
        if (currentroom !== 'default') {
            console.log(currentroom + ' recevied ' + msg)
            io.to(currentroom).emit('chat message', msg);
        } else {
            console.log('default recevied ' + msg)
            io.to('default').emit('chat message', msg)
        }
    });

    socket.on('subscribe', function (room) {
            if (currentroom !== 'default') {
                socket.leave(currentroom)
                console.log('A user change room: ' + room)
                socket.join(room);
                currentroom = room;
            } else {
                socket.leave('default')
                console.log('A user enter room: ' + room)
                socket.join(room);
                currentroom = room;
            }
        });

});



http.listen(3030);