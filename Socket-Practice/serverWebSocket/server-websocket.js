let WebSocketServer = require('websocket').server;
let express = require('express');
let app = express();
let server = app.listen(3000, (data)=>{
    console.log('Listening on port: 3000');
});

let wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,
    path: "/test/location"
});

wsServer.on('request', (request)=>{
    
    // Get Connection
    let connection = request.accept('echo-protocolt', request.origin);
    
    
    console.log(`${Date.now()} - Connection Accepted!`);
    
    // Message
    connection.on('message', (message)=>{
        console.log('**** Location *****');
        console.log(message);
        if(message.type === 'utf8'){
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }else if(message.type === 'binary'){
             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    
    // Close
    connection.on('close', (reasonCode, description)=>{
       console.log(`${new Date()} Peer ${connection.remoteAddress} disconnected.`);
    });
});
   

let wsServer2 = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,
    path: "/test/presence"
});

wsServer2.on('request', (request)=>{
    
    // Get Connection
    let connection = request.accept('echo-protocolt', request.origin);
    console.log(`${Date.now()} - Connection Accepted!`);
    
    // Message
    connection.on('message', (message)=>{
        console.log('**** Presence *****');
        if(message.type === 'utf8'){
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }else if(message.type === 'binary'){
             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    
    // Close
    connection.on('close', (reasonCode, description)=>{
       console.log(`${new Date()} Peer ${connection.remoteAddress} disconnected.`);
    });
});