var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");

connection.onError = function(error)
{
    console.log("Error in socket:" + error);
}

connection.onmessage = function(message)
{
  console.log("New message, Server: " + message.data);
  document.getElementById("chat").innerHTML += ( message.data + "<br>" );
 
}

connection.onopen = function(){
  console.log("Connection is now open");
}



var Message_Send = function(){
  var dulieu = document.getElementById("data").value;
  connection.send(dulieu);

}
