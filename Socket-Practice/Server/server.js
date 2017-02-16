'use strict';
let WebSocket = require('ws');
let url = require('url');
let http = require('http');

const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });
const server = http.createServer();

server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/foo') {
    wss1.handleUpgrade(request, socket, head, (ws) => {
      wss1.emit('connection', ws);
    });
  } else if (pathname === '/bar') {
    wss2.handleUpgrade(request, socket, head, (ws) => {
      wss2.emit('connection', ws);
    });
  } else {
    socket.destroy();
  }
});



server.listen(3000);

wss1.on('connection', (websock)=>{    
    console.log("connection on /test/location");
    websock.on('message', (message)=>{
        console.log(`Location: ${message}`);       
        websock.send(`Location Message Recieved: ${message}`);
    });
});


wss2.on('connection', (websock)=>{
    console.log(websock);
    console.log("connection on /test/presence");
    websock.on('message', (message)=>{
        console.log('Presence:');
       console.log(message);
        websock.send('Presence Message Recieved!!');
    });
});
