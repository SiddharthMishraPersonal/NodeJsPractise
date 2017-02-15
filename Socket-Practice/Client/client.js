let webSocket = require('ws');
let ws = new webSocket('ws://localhost:3000');

ws.on('open', ()=>{
    console.log(`Connected at : ${Date.now()}`);
    ws.send(`siddharth mishra on client.${Date.now()}`); 
    console.log('Message sent.')
});

ws.on('close', ()=> {
  console.log(`Disconnected at : ${Date.now()}`);
});

ws.on('message', (data, flags) =>{
  console.log(`Roundtrip time: ${Date.now() - data} ms`, flags);
 
  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});