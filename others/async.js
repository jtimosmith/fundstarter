var fs = require('fs');
var ptcl = require('http');
var port = process.env.PORT || 8080;

ptcl.createServer(function (request, response){
	fs.readFile('index.html', function(err, webdata){
		response.writedHeader(256, {'Type': 'text/html', 'Length' : data.length});
	response.write(data);
	response.end();
	}
	);
}
)
listen(port);

