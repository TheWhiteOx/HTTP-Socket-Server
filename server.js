const net = require('net');


const server = net.createServer( (socket) => {
  let route = null;
  socket.on('data', (data) => {
    route = data.toString().split(' ')[1];
    if (route === '/') {
      console.log('Route is: ', route);
    } else if (route === '/hydrogen') {
      console.log('Route is: ', route);
    } else if (route === '/incorrect-path') {
      console.log('Route is: ', route);
    } else {
      console.log('***404*** Route not Found!')
    }

  socket.write('Data\r\n', data);
  })
  socket.pipe(socket);
})


server.listen({port: 8080})