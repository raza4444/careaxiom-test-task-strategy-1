const express = require('express');
const app = express();
const routes = require('./src/routes');
const { SERVICE_PORT } = process.env;


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', routes);

var server = app.listen(SERVICE_PORT || 3000 , function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('App listening at http://%s:%s', host, port);  
});
