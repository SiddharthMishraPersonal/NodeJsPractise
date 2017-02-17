const WebSocket = require('ws');
 
const ws = new WebSocket('ws://localhost:3000/presence');
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data, flags) {
  // flags.binary will be set if a binary data is received. 
  // flags.masked will be set if the data was masked. 
    
    console.log(data);
    ws.close();
});