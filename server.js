var http = require("http");
var requestify = require("requestify");
http.createServer(function(request, response) {
  var task_is_running = false;
	setInterval(function(){
    if(!task_is_running){
        task_is_running = true;
        //SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI
		//http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/3/
			requestify.get('http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/3/').then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
			if(response.getBody().state.xy[0]==0.3413&&response.getBody().state.xy[1]==0.5426){
				console.log('green');
				requestify.request('http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/1/state', {
				method: 'PUT',
				body:{
					on:true
				}
				}).then(function(response) {
    
				console.log(response.getBody());
				});
				requestify.request('http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/2/state', {
				method: 'PUT',
				body:{
					on:true
				}
				}).then(function(response) {
    
				console.log(response.getBody());
				});
			}
			if(response.getBody().state.xy[0]==0.4280&&response.getBody().state.xy[1]==0.2178){
				console.log('blue');
				requestify.request('http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/1/state', {
				method: 'PUT',
				body:{
					on:false
				}
				}).then(function(response) {
    
				console.log(response.getBody());
				});
				requestify.request('http://192.168.0.3/api/SonLxBjvZ9f0rXsC34WEdlDdKYohJP-19m79KzuI/lights/2/state', {
				method: 'PUT',
				body:{
					on:false
				}
				}).then(function(response) {
    
				console.log(response.getBody());
				});
			}
			
    // Get the response raw body
			console.log(response.getBody().state);
			});
            task_is_running = false;
        
    }
}, 1000);

}).listen(8888);