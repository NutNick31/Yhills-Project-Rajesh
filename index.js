var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.get('/getusers', function (req,res) {
    res.sendFile('index.html',{root: __dirname})
})

app.listen(8080, function(){
    console.log("Yhills edutech project website is listening 8080")
})