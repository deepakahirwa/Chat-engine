const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messagecontainer  = document.querySelector(".container")
var audio = new Audio(iphone_text_message.mp3)


const append = (message,position) =>{
     const messageElement = document.createElement('div');
     messageElement.innerText = message;
     messageElement.classList.add('message')
     messageElement.classList.add('position')  
     messagecontainer.append(messageElement);
     if(position =='left')
     audio.play();
}
form.addEventListener('submit',(e)=>{
     e.preventDefault();
     const message = messageInput.ariaValueMax;
     append(`you :${message}`,right)
     socket.emit('send',message);
     // messageInput.value = ''
})
 const anyname = prompt("enter ur name");

 
 socket.emit('new-user-joined',anyname);
 socket.on('user-joined',name =>{
     append(`${name} joined the chat`);
 })
 socket.on('receive',data=>{
     append(`${data.name}:${data.message}`,`left`);
 })
 socket.on('leave',name=>{
     append(`${name} left thechat`,`left`);
 })
 