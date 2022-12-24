const express = require('express')
const app = express();
const path = require('path');

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname,"public/index.html");
})
app.get('/signup',function(req, res){
    console.log(req.url)
    res.sendFile(path.join(__dirname ,"public/signup.html"))
})

app.listen(3000, (err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("server is listening 8080");
  }
})