const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// var path = require('path');
// var serveStatic = require('serve-static');

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/swap.html");  
});

// app.listen(port);
app.listen(process.env.PORT || 8080, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port,app.settings.env);
});
// console.log("server started...");