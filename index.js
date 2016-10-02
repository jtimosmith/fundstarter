/*
var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);

var fundstarter = function(request, response){
	var buffer = fs.readFileSync('index.html', 'utf8');
	response.writeHead(200, {'Content-type': 'text/html'});
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
	response.writeHead(200, {'Content-type': 'text/html'});
	fs.readFile('index.html', 'utf8', function(error, data){
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

function find(callback){
	fs.open('index.html', 'r+', 
		function(error, fd){
			if(error){
				return callback(error);
			}
			fs.read(fd, buffer, 0, buffer.length, 0,
				function(error, bytes){
					if(error){
						return callback(error);
					}
					callback(null, buffer.slice(0, bytes));
				}
			);
		}
	);
}


find(function(error, data){
	function onRequest(request, response){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write(data);
		reponse.end();
	}
	http.createServer(onRequest).listen(port);
})
