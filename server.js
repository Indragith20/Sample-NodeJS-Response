var port = 4000;

var express = require('express');
var bodyparser = require('body-parser');
var mainRouter = require('./routes/index');

var app = express();

 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));


app.use('/',mainRouter);


var server = app.listen(port,function(){
    console.log("Listening at Port "+port);
});

