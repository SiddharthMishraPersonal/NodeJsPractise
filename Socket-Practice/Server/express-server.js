'use strict';
let WebSocket = require('ws');
let url = require('url');
let express = require('express');
let expressApp = express();
let server = expressApp.listen(3000);

const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });
const server = http.createServer();

expressApp.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/location') {
    wss1.handleUpgrade(request, socket, head, (ws) => {
      wss1.emit('connection', ws);
    });
  } else if (pathname === '/presence') {
    wss2.handleUpgrade(request, socket, head, (ws) => {
      wss2.emit('connection', ws);
    });
  } else {
    socket.destroy();
  }
});


wss1.on('connection', (websock)=>{    
    console.log("connection on /test/location");
    websock.on('message', (message)=>{
        console.log(`Location: ${message}`);       
        websock.send(`*/*/ Location Message Recieved: ${message}`);
    });
});


wss2.on('connection', (websock)=>{    
    console.log("connection on /test/presence");
   websock.on('message', (message)=>{
        console.log(`Presence: ${message}`);       
        websock.send(`*** Presence Message Recieved: ${message}`);
    });
});
