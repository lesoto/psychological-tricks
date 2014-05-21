var http = require('http');
var port = process.env.PORT || 8000;

var counter = 0;

http.createServer(function (req, res) {
  	
  	counter=counter+1;

	var path = req.url;
	console.log("requested=" + path + " counter=" + counter);

	res.writeHead(200, {'Content-Type': 'text/html'}); 

	if (path == "/") {
		res.end("Hello World. You are requestor # " + counter + ".<br><a href='/page2'>Page 2</a>\n");

	} else if (path == "/page2") {
		res.end("This is page 2. <a href='/'>Back.</a>\n"); 	
	}

}).listen(port);