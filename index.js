/*
var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);

var fundstarter = function(request, response){
	var buffer = fs.readFileSync('index.html', 'utf8');
	response.writeHead(200, {"Content-type": "text/html"});
	response.end(buffer);
};

var server = http.createServer(fundstarter);
server.listen(port);
*/

/*
var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);

var fundstarter = http.createServer(function(request, response){
	response.writeHead(200, {"Content-type": "text/html"});
	fs.readFile('public/index.html', 'utf8', function(error, data){
		if(error){
			throw error;
		}
		response.write(data);
		response.end();
	});
}).listen(port);
*/



var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 8080;
var buffer = new Buffer(2048);

var find = function(request, response){
	response.writeHead(200, {"Content-type": "text/html"});
	fs.exists('public/index.html', function(exist){
		if(exist){
			fs.stat('public/index.html', 
				function(error, stats){
					fs.open('public/index.html', 'r', 
						function(error, fd){
							var buffer = new Buffer(stats.size);
							fs.read(fd ,buffer, 0, buffer.length, 0, 
								function(error, bytes, buffer){
									response.write(buffer.toString('utf8', 0, bytes));
									fs.close(fd);
								}
							);
						}
					);
				}
			);
		}
	});
}
