const modExpress=require('express');
const app=modExpress();

app.get('/',function(reg,res){
    res.send('<!doctype><html><head></head><body><h1>'+
	         'Que ondas!!!</h1></body></html>');
})


//var server = require('http').createServer();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});