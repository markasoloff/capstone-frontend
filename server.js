const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// var path = require('path');
// var serveStatic = require('serve-static');

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");  
});

app.listen(port);
console.log("server started...");