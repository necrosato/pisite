var http = require("http");
var fs = require("fs");
var connect = require("connect");

var app = connect();

//404 response
function pageNotFound(request, response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page ");
    response.write(request.url);
    response.write(" not found");
    response.end();
}

function onRequest(request, response, next) {
    if (request.method == "GET" && request.url == '/') {
        console.log("about to serve page: www.naookiesato.com/");
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else if (request.method == "POST" && request.url == '/schedule_page.html') {
        process.stdout.write("about to serve page: www.naookiesato.com");
        process.stdout.write(request.url);
        process.stdout.write('\n');
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./schedule_page.html").pipe(response);
    }
    else if (request.method == "GET" && request.url == '/IMG_6145.PNG') {
        process.stdout.write("about to serve image: www.naookiesato.com");
        process.stdout.write(request.url);
        process.stdout.write('\n');
        response.writeHead(200, {"Content-Type": "image/png"});
        fs.createReadStream("./IMG_6145.PNG").pipe(response);
    }
    else {
        process.stdout.write("Cannot serve ")
        process.stdout.write(request.url);
        process.stdout.write('\n');
        pageNotFound(request, response);
    }
    next();
}

function logRequest(request, response, next) {
        process.stdout.write("request recieved: ");
        process.stdout.write(request.url);
        process.stdout.write('\n');
        next();
}

app.use(logRequest);
app.use(onRequest);

var server = http.createServer(app);
server.listen(8080);

console.log("server up:");
