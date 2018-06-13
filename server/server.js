
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//   res.sendFile(publicPath + '/index.html');
// });

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      test: message.text,
      createdAt: new Date().getTime()
    });
  });


  socket.on('disconnect', () => {
    console.log('Client disconnected from server');
  });

});

server.listen(port, () => {
  console.log(`Started up on port ${port}`);
});
