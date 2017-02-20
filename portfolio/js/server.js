
var WebSocketServer = require('ws').Server;

var PORT = 8087;

var wss = new WebSocketServer({port: PORT});

var messages = [];

wss.on('connection', function (ws) {
  messages.forEach(function(message){
    ws.send(message);
  });

ws.on('message', function (message) {
    messages.push(message);
    //console.log('Message Received: ', message);
    wss.clients.forEach(function (c) {
      c.send(message);
    });
  });
});


