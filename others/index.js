var fs = require('fs')
var ptcl = require('http')
var port = process.env.PORT || 8080;
var buffer = new Buffer(2048);
var server = ptcl.createServer(find);

var find = function(callback){
	fs.open("index.html", 'r+', 
		function(err, fd){
			if(err){
				return callback(err)
			}
			fs.read(fd, buffer, 0, buffer.length, 0, null,
				function(err, bytes, buffer){
					var webdata = buffer.toString('utf8');
					response.writeHeader(256, {'Type' : 'text/html'});
					response.write(webdata);
					response.end();
				}
			)
		}
	)
}

server.listen(port);
