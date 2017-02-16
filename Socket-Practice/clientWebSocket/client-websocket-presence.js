let WebSocketClient = require('websocket').client;
let client = new WebSocketClient();

client.on('connectFailed', (error)=>{
   console.log(`Connection Error: ${error.toString()}`); 
});

console.log('Presence');

client.on('connect', (connection)=>{
    console.log('Websocket Client Connected');
    connection.on('error', (error)=>{
        console.log(`Connection Error: ${error.toString()}`);
    });
    
    connection.on('close', ()=>{
        console.log('echo-protocol connection closed.');
    });
    
    connection.on('message', (message)=>{
        if (message.type === 'utf8') {
            console.log(`Received: '${message.utf8Data}'`);
        }
    });
    
    function sendNumber(){
        if(connection.connected){
            let number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    
    sendNumber();
});

client.connect('ws://localhost:3000/test/presence', 'echo-protocolt');