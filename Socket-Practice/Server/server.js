'use strict';

let express = require('express');
let WebSocket = require('ws');

let app = express();
let server = app.listen(3000);

console.log('My socket server is running');

let webSocketServer = new WebSocket.Server({
    server : server
});

webSocketServer.on('connection', (websocket)=>{
   websocket.on('message', (message)=>{
       console.log(message);       
       websocket.send(Date.now());
   });
});