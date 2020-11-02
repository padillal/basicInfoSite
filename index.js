let http = require('http');
let url = require("url");
let fs = require("fs");

const PORT = 8080;

function onRequest(request, response) {
  let path = url.parse(request.url).pathname;
  if(path === "/about"){
    fs.readFile("about.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
  } else if(path === "/contact"){
    fs.readFile("contact-me.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
  }
  else if(path === "/"){
    fs.readFile("index.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
  }
  else {
    fs.readFile("404.html", function(err, data){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
  }
}
http.createServer(onRequest).listen(PORT);
console.log("Server has started on PORT: " + PORT);
