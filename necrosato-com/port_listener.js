var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    console.log("request recieved:");
    fs.readFile("index.html", function(err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
});

server.listen(8090);
