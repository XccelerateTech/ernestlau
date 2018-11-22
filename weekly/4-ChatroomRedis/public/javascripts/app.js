var socket = io();
socket = io.connect('');
// socket = io.connect('ws://localhost:3001');

socket.on('message', (obj) => {
    console.log(obj);
});

document.querySelector('button').addEventListener('click', () => {
    Send();
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        Send();
    }
})

socket.on('message', (obj) => {
    console.log(obj);
    console.log(obj.name);
    appendData(obj);
});

socket.on('history', (obj) => {
    if (obj.length > 0) {
        console.log('I recevied!')
        appendData(obj);
    }
});

function appendData(obj) {
    let el = document.querySelector('.chats');
    let html = el.innerHTML;

    if (obj.length > 0) {
    obj.forEach(element => {
        html +=
            `
            <div class="chat">
                <div class="group">
                    <div class="name">${JSON.parse(element).name}：</div>
                    <div class="msg">${JSON.parse(element).msg}</div>
                </div>
                <div class="time">${moment(JSON.parse(element).time).fromNow()}</div>
            </div>
            `;
    }) } else {
        console.log('Its not history!')
        html +=
        `
        <div class="chat">
            <div class="group">
                <div class="name">${obj.name}：</div>
                <div class="msg">${obj.msg}</div>
            </div>
            <div class="time">${moment(obj.time).fromNow()}</div>
        </div>
        `;
    };
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