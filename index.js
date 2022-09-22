const webSocket = require("ws");
const port = 5000 || process.env.PORT;
const wsServer = new webSocket.Server({ port: port });

// Glitch is a server where code is hosted

wsServer.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("message", (msg) => {
    console.log("Take this back " + msg.toString());
    // socket.send("Take this back " + msg.toString());

    // Broadcasting msg
    wsServer.clients.forEach((client) => {
      client.send(msg.toString());
    });
  });

  socket.on("close", () => {
    console.log("A client disconnected");
  });
});

console.log(new Date() + "Server is listening on port " + port);
