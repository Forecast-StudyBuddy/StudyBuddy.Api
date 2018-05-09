var express = require('express'),
  app = express(),
  port = 48480,
  bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/routes')
routes(app)

app.listen(port);

console.log('Study Buddy API server started on: ' + port);