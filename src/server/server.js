var http = require("http");
var server = http.createServer(function (request, response) {
  response.write("hello client");
  response.end();
});

server.listen(3000);
console.log("Server running at http://localhost:3000/");
