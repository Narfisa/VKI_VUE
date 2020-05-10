const WebSocketServer = require('websocket').server;
const http = require('http');
let connections = [];

const server = http.createServer();

server.listen(8081, function() {
  console.log('IT\'S WORKING!')
});

wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(message.utf8Data);
            connections.map((element) => {
                element.sendUTF(message.utf8Data);
            });
        }
    });

    connection.on('close', function(connection) {
        connections = connections.filter((element) => element !== connection);
    });

    connections.push(connection);
});