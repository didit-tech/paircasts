
require.paths.unshift(__dirname + '/vendor');

/**
 * Module dependencies.
 */

var express = require('express')
  , jade = require('jade');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyDecoder());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    locals: {
      title: 'Paircasts'
    }
  });
});

// Only listen on $ node server.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port)
}
