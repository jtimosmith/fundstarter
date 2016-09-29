/*var fs = require('fs')
var http = require('http')
var buf = new Buffer(2490);

function readHtml(callback){
	fs.open("index.html", 'r+', function(err, fd){
			if(err) return callback(err)
			fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytes){
					if(err) return callback(err)
					callback(null, buffer.slice(0, bytes))
				})
		})
}

readHtml(function(err, content){
	function onRequest(request, response){
		response.writeHead(200, {"Type": "html"})
		response.write(webdata)
		response.end()
	}
	http.createServer(onRequest).listen(process.env.PORT || 8080)
}
)
*/
