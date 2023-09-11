// it handle socket io connection
const io = require('socket.io')(8000);


const users = {};

io.on('connection',socket =>{
     socket.on('new-user-joined', name =>{
          // console.log("new user",name);
          //  if any new user is tell all user about joined user
         users[socket.id] = name;
         socket.broadcast.emit('user-joined',name)
     });

     socket.on('send',message =>{
          socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
     });
     
     socket.on('disconnect',message =>{
          socket.broadcast.emit('left',users[socket.id]);
          delete users[socket.id];
     });
});