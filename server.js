var http = require("http");
var requestify = require("requestify");
http.createServer(function(request, response) {
  var task_is_running = false;
	setInterval(function(){
    if(!task_is_running){
        task_is_running = true;
        
			requestify.get('https://httpbin.org/ip').then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
			response.getBody();

    // Get the response raw body
			console.log(response.body);
			});
            task_is_running = false;
        
    }
}, 1000);

}).listen(8888);