var http = require('http'),
	path = require('path'),
	fs   = require('fs');

//a helper function to handle HTTP requests
function requestHandler(req, res) {
	var
		fileName = path.basename(req.url) || 'index.html',
		localFolder = __dirname + '/public/',
		page404 = localFolder + '404.html';

	getFile((localFolder + fileName),res,page404);
}

function getFile(filePath,res,page404){
	fs.exists(filePath,function(exists){
		if(exists){
			fs.readFile(filePath,function(err,contents){
				if(!err){
					res.end(contents);
				} else {
					console.dir(err);
				}
			});
		} else {
			render404(res, page404);
		}
	});
}

function render404(res, page404) {
	fs.readFile(page404,function(err,contents){
		if(!err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end(contents);
		} else {
			console.dir(err);
		}
	});
}
var server = http.createServer(requestHandler);
server.listen(8085);
