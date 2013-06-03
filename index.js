var server=require('./server');
var routeService=require('./router');
var requestHandlers=require('./requestHandlers');


var handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;

var router=new routeService.router();

server.start(router.route,handle);

console.log('index');