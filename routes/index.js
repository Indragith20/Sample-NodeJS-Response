var express= require('express');
var fs = require('fs');
var router=express.Router(); 


router.get('/',function(req,res){
	//Give the file path or else use PATH package in NodeJS
    var filePath =  "C:/Users/jith.indragith-VAIO/Desktop/New folder/routes/hello.txt";
    fs.exists(filePath, function(exists){
    	if (exists) {     
        res.writeHead(200, {
          "Content-Type": "application/octet-stream",
          //hello.txt is the filename
          "Content-Disposition": "attachment; filename=" + 'hello.txt'
        });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.end("ERROR File does not exist");
      }
    })
});

module.exports = router;