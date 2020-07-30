var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
	console.log("got a request!");
	response.write("hi");
	response.end();
});

server.listen(3000);