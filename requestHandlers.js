var exec=require('child_process').exec;
var contentTypes=require('./contentTypes');
var querystring=require("querystring");

(function()
{
	 var body = '<html>'+
                 '<head>'+
                 '<meta http-equiv="Content-Type" content="text/html; '+
                 'charset=UTF-8" />'+
                 '</head>'+
                 '<body>'+
                 '<form action="/upload" method="post">'+
                 '<textarea name="text" rows="20" cols="60"></textarea>'+
                 '<input type="submit" value="Submit text" />'+
                 '</form>'+
                 '</body>'+
                 '</html>';
             
     

	function start(response)
	{
		var o={timeout:10000,maxBuffer:20000*1024}
		console.log('Request handler start called');
      //  exec("dir",o,function(error,stdout,stderr){
		  response.writeHead(200,contentTypes.textHtml)
	      //response.write(stdout);
	      response.write(body);
	      response.end();
       // });
	}

    function upload(response,postData)
	{
		 console.log('Request handler upload called');
		 response.writeHead(200,contentTypes.textPlain)
	     response.write(querystring.parse(postData).text);
	     response.end();
	}

    
	module.exports.start=start;
	module.exports.upload=upload;
}());

