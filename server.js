var express = require('express')
  , app = express.createServer();

app.get('/', function(req, res){
    res.send('Paircasts coming soon...');
});

app.listen(3000);
