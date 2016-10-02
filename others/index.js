var fs = require('fs');
var ptcl = require('http');
var port = process.env.PORT || 8080;
var find = function(request, response){
var server = ptcl.createServer(find);

	fs.stat('index.html', function(error, stats){
		if(error){
			return console.log(error);
		}
		fs.open('index.html', 'r', function(error, fd){
			if(error){
				return console.log(error)
		}
		var bufferSize = stats.size;
		var buffer = new Buffer(bufferSize);

		fs.read(fd, buffer, 0, buffer.length, null, 
			function(error, bytesRead, buffer){
				var data = buffer.toString('utf8');
				response.writeHeader(200, {'Content-Type': 'text/html'});
				response.write(data);
				response.end();
			}
			);
		}
		);
	}
	);
};
server.listen(port);
