var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
var logfmt = require("logfmt");
app.use(logfmt.requestLogger());

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);