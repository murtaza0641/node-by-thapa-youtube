var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true);
  res.write(q.href);
  res.end();
}).listen(8080);

url.format() 	// Returns a formatted URL string
url.parse() //	Returns a URL object
url.resolve() //	Resolves a URL