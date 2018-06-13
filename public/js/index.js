let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'robo@example.com',
    text: 'Hey This is RoBo.  Lets schedule a party'
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('nerMessage', message);
});
