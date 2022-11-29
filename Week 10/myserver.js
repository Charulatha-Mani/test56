var http = require("http"); //Requires the builtin http module
// Defines a function that'll handle incoming HTTP requests
function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, BIATCH!");
}
//Creates a server that uses your function to handle request
var server = http.createServer(requestHandler);
// Starts the server lisetning to port 3000
server.listen(3000);