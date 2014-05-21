var express = require('express');
var logfmt = require("logfmt");
var app = express();
app.use(logfmt.requestLogger());
app.listen(process.env.PORT || 5000);
/* var gzippo = require('gzippo'); 
var logger = require('morgan');
app.use(logger);
app.use(gzippo.staticGzip("" + __dirname + "/dist")); */