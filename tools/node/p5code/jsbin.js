var exampleSocket = new WebSocket("ws://localhost:8080", "protocolOne"); //client erstellen mit protocol://host:port und interne protokollbezeichung
var numberstorage = 0;

exampleSocket.onopen = function (event) { //wird aufgerufen, wenn die verbindung erfolgreich aufgebaut worden ist
  console.log("connection successfully opened")
};

exampleSocket.onmessage = function (event) { //wird aufgrufen, wenn nachricht empfangen wird
  const data = JSON.parse(event.data)
  //console.log(data.payload.args[0])
  //console.log(numberstorage)
  numberstorage = data.payload.args[0];
  console.log("variablenwert: " + numberstorage);
}