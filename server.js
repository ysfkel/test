var http=require('http');
var url=require('url');

var start= function(route,handle){


function onRequest(request,response)
{
	var postData='';
	request.setEncoding('utf8');

	var pathname=url.parse(request.url).pathname;

	


	request.addListener("data",function(postDataChunk){
		postData +=postDataChunk;
		console.log('received post data chunk '+postDataChunk+'.');
	})

   request.addListener("end",function(postDataChunk){
			route(handle,pathname,response,postData);
	})


}

http.createServer(onRequest).listen(8888);
};

module.exports.start=start;




