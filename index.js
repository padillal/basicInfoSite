let http = require('http');
let fs = require("fs");

let server = http.createServer(function(request, response){
  
  fs.readFile("index.html", function(err, data){
    response.writeHead(500, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });




})

server.listen(8080);
// let server = http.createServer(function (req, res){
//   console.log('Incoming Request');
//   res.write('Welcome Client');
//   res.end();
// });
// server.listen(PORT);
// console.log('Server running at http://127.0.0.1:' + PORT + '/');
