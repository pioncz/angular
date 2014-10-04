// var http = require('http');
// var url = require('url');
// var qs = require('querystring');
// var port = (typeof process.argv !== 'undefined' && process.argv.length>2)?parseInt(process.argv[2]):4000;

// http.createServer(function (req, res) {
//   var urlParsed = url.parse(req.url, true);
//   var path = urlParsed.pathname;
//   var query = urlParsed.query;
//   console.log(req.method);
//   console.log(path);
//   res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*'});
//   switch(path) {
//   	case '/login':
//   		if (req.method == 'POST') {
//           var body = '';
//           req.on('data', function (data) {
//               body += data;

//               if (body.length > 1e6)
//                   req.connection.destroy();
//           });
//           req.on('end', function () {
//               var post = qs.parse(body);
//               console.log(post);
//               console.log(post.username);
//               console.log(post['username']);
//               // use post['blah'], etc.

//           });
//   		} else {

//   		}
//   		res.end('true');
//   		break;
//   	default:
//   		res.end('Hello World\n');
//   }
// }).listen(port, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:'+port);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function(req, res){
  res.set('Content-Type', 'text/plain');
  res.set('access-control-allow-origin', '*');
  console.log('______');
  console.log(JSON.stringify(req.body, null, 2));
  console.log('______');
  console.log(req.body);
  console.log('______');
  console.log(req.body.username2);
  console.log('______');
  res.send('Hello World');
});

var server = app.listen(4000, function() {
    console.log('Listening on port %d', server.address().port);
});