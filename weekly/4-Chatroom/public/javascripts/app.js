var socket = io();
socket = io.connect();
// socket = io.connect('ws://localhost:3001');

socket.on('message', (obj) => {
    console.log(obj);
});

document.querySelector('button').addEventListener('click', () => {
    Send();
});

socket.on('message', (obj) => {
    console.log(obj);
    appendData([obj]);
});

socket.on('history', (obj) => {
    if (obj.length > 0) {
        appendData(obj);
    }
});

function appendData(obj) {
    let el = document.querySelector('.chats');
    let html = el.innerHTML;

    obj.forEach(element => {
        html +=
            `
            <div class="chat">
                <div class="group">
                    <div class="name">${element.name}：</div>
                    <div class="msg">${element.msg}</div>
                </div>
                <div class="time">${moment(element.time).fromNow()}</div>
            </div>
            `;
    });
    el.innerHTML = html.trim();
    scrollWindow();
}

function Send() {

    let name = document.querySelector('#name').value;
    let msg = document.querySelector('#msg').value;
    if (!msg || !name) {
        alert('Please enter your name / message');
        return;
    }
    let data = {
        name: name,
        msg: msg,
    };
    socket.emit('message', data);
    document.querySelector('#msg').value = '';
}

// auto scroll to bottom everytime append data
function scrollWindow() {
    let h = document.querySelector('.chats');
    h.scrollTo(0, h.scrollHeight);
}