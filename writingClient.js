const webSocket = require("ws");
const ws = new webSocket("ws://127.0.0.1:5000");

ws.on("open", () => {
  ws.send("Hello server");
});

ws.on("message", (msg) => {
  console.log(msg.toString());
});
