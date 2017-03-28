var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');

app.set('port',3000);

app.use(function(req,res,next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', routes);
/*app.get('/',function(req,res){
  res
    .status(200)
    .sendFile(path.join(__dirname,'public','index.html'))
});
*/
var server = app.listen(app.get('port'));
