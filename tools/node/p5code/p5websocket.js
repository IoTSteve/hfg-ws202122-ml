// where the serial server is (your local machine):
var host = 'localhost:8080';
var socket; // the websocket
var numberstorage = 0; // the sensor value

function setup() {
  createCanvas(400, 400);
  // connect to server:
  socket = new WebSocket('ws://' + host);
  // socket connection listener:
  socket.onopen = sendIntro;
  // socket message listener:
  socket.onmessage = readMessage;
}

function draw() {
  
 
  
  if (numberstorage == 1 ){
    background("#2307AF");
  }
  
   if (numberstorage == 2 ){
     background("#38E811")
    
  }
  
  //background("#2307AF");
  fill(255);
  //ellipse(numberstorage, height / 2, 20, 20);
  text(numberstorage, 20, 20);
}

function sendIntro() {
  // convert the message object to a string and send it:
  socket.send("Hello");
}

function readMessage (event) {
    const data = JSON.parse(event.data)
  //console.log(data.payload.args[0])
  //console.log(numberstorage)
  numberstorage = data.payload.args[0];
  console.log("variablenwert: " + numberstorage);
}