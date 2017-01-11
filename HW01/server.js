


var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  if(parsedUrl.pathname == '/listings'){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(listingData, null, 4));

  }
  else{
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Bad gateway error');
  }


  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  listingData = JSON.parse(data);
  http.createServer(requestHandler).listen(port);
  console.log('Server started');


  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});