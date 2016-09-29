var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8080;
var requestlistener = function(request, response)
{
	fs.stat('index.html', function(error, stats)
	{
		if(error)
		{
			return console.log(error);
		}
		fs.open('index.html', 'r', function(error, fd)
		{
			if(error){
				return console.log(error)
		}
		var bufferSize = stats.size;
		var buffer = new Buffer(bufferSize);

		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer)
		{
			var data = buffer.toString('utf8');
			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.write(data);
			response.end();
		});
	});
});
};

var server = http.createServer(requestlistener);
server.listen(port);
