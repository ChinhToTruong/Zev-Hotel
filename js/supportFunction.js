const supportButton = document.querySelector('#button-call');

const boxChat = document.querySelector('.chat-box');

const closeButton = document.querySelector('.close-button');

const sendButton = document.querySelector('.send-button');

const upButton = document.querySelector('#to-top');

supportButton.addEventListener('click', ()=> {
    boxChat.style.display = 'flex';
    supportButton.style.display = 'none';
    upButton.style.display = 'none';
});

closeButton.addEventListener('click', ()=> {
    boxChat.style.display = 'none';
    supportButton.style.display = 'flex';
    upButton.style.display = 'flex';

});


sendButton.addEventListener('click', ()=> {
    let message = document.querySelector('.message-input input').value;
    let messageContent = document.querySelector('.chat-box main');
    let date = new Date();
    var div = document.createElement('div');
    div.className = 'my-message';
    let text = `<p> ${message}</p>
    <p style="text-align: end;"> ${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes()) }</p>`;
    div.innerHTML = text;

    messageContent.appendChild(div);
    
    setTimeout(autoReply(),5000);
});

function autoReply() {
    let message = document.querySelector('.message-input input').value;
    let messageContent = document.querySelector('.chat-box main');
    let date = new Date();
    var div = document.createElement('div');
    div.className = 'admin-message';
    let text = `<p> Thanks!!!</p>
    <p style="text-align: end;"> ${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes())}</p>`;
    div.innerHTML = text;

    messageContent.appendChild(div);
};




