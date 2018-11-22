const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const SocketHander = require('./socket/index');
require('dotenv').config()

var index = require('./routes/index');

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');

app.use('/', index);
//

io.on('connection', async (socket) => {

    console.log('a user connected');

    socketHander = new SocketHander();

    socketHander.connect();

    const history = await socketHander.getMessages();
    const socketid = socket.id;
    // console.log(`history: ${history}`)

    // io.to(socketid).emit('history', history);

    socket.on("disconnect", () => {
        console.log("a user go out");
    });

    socket.on("message", (obj) => {
        socketHander.storeMessages(obj);  //store the message to database
        io.emit("message", obj);
    });

});


server.listen(3001);

