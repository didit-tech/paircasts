var express = require('express')
  , app = express.createServer();

app.get('/', function(req, res){
    res.send('<h1 style="font-size: 60px;">Paircasts coming soon...</h1>');
});

app.listen(3000);
