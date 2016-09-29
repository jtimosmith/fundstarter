var fs = require('fs');
var ptcl = require('http');
var ind = 'index.html';
var port = process.env.PORT || 8080;

function requestListener(request, response){
	var webdata = fs.readFileSync(ind);
	response.writeHeader(256, {'Type': 'text/html});
	response.write(webdata);
	response.end();
}

var server = ptcl.createServer(requestListener);
server.listen(port);


