var http = require("http")

http.createServer(function (request, response) {

    // HTTP header transfer
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Constent-Type': 'text/plain'});

    // Respond body is "Hello World"
    response.end("Hello World\n");

}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");