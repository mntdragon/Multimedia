//Khai bao web socket
//wss: for secure WebSocket connection the same way
// https: is used for secure HTTP connections
var socket = new WebSocket("ws://localhost:8087/");

var user;
var socket;


function Chat_Connect() {

        user = document.getElementById("name").value;
        

        // to receive messages and add content to 'chatBox'
        socket.onmessage = function (msg) {
            var chatBox = document.getElementById("chatBox");
            var message = JSON.parse(msg.data); //Using JSON to transmit objects
        chatBox.innerHTML = "<b>" + message.user + "</b>:  " + message.text + "<br>" + "<hr>" + chatBox.innerHTML ;
        console.log('Log mess from Server:' + msg.data);
        };

        socket.onopen = function () {
            var message = {};
        message.user = user;
        message.text = "<b>Joined the chat</b>";
        socket.send(JSON.stringify(message));
        //socket.send("Ready or not!? once a connection is established by defining an onopen handler to do the work"); 
        socket.send('Ping, connection is open');
        };


        // Log errors
        socket.onerror = function (error) {
        console.log('WebSocket Error ' + error);
        };
    
        document.getElementById("chat_content").setAttribute("style", "display: block");
        document.getElementById("start").setAttribute("style", "display:none");

}

function Message_Send(){
      var msg = {
        type: "message",
        text: document.getElementById("message").value,
        user: document.getElementById("name").value,
        date: Date.now()
  };

      socket.send(JSON.stringify(msg)); //send msg obj as JSON to server
      document.getElementById("message").value = ""; //Clear message, ready to receive another mess
}

window.onload = function () {
  document.getElementById("chat_content").setAttribute("style", "display:none");
}