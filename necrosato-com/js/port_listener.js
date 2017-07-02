var http = require("http");
var fs = require("fs");
var connect = require("connect");

var app = connect();

//404 response
function pageNotFound(request, response) {
    process.stdout.write("Cannot serve ");
    process.stdout.write(request.url);
    process.stdout.write(" with ");
    process.stdout.write(request.method);
    process.stdout.write('\n');
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page ");
    response.write(request.url);
    response.write(" not found");
    response.end();
}

function servePage(url, response) {
    process.stdout.write("about to serve page: www.necrosato.com");
    process.stdout.write(url);
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("../"+url).pipe(response);
    process.stdout.write(" ... done\n");
}

function serveImage(url, response, ext) {
    process.stdout.write("about to serve image: www.necrosato.com");
    process.stdout.write(url);
    response.writeHead(200, {"Content-Type": ("image/"+ext)});
    fs.createReadStream("../"+url).pipe(response);
    process.stdout.write(" ... done\n");
}

function onRequest(request, response, next) {
    switch (request.url) {
        case "/":
            servePage("/html/index.html", response);
            break;
        case "/html/index.html":
            servePage(request.url, response);
            break;
        default:
            pageNotFound(request, response);
            break;
    }
    next();
}

function logRequest(request, response, next) {
        process.stdout.write(new Date().toString());
        process.stdout.write(": request recieved: ");
        process.stdout.write(request.url);
        process.stdout.write('\n');
        next();
}

app.use(logRequest);
app.use(onRequest);

var server = http.createServer(app);

server.listen(8090);

console.log("server up:");
