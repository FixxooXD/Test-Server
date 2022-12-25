const express = require('express')
const app = express();
const path = require('path');
require('dotenv').config
const port = process.env.PORT || 8080;


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname,"public/index.html");
})
app.get('/signup',function(req, res){
    console.log(req.url)
    res.sendFile(path.join(__dirname ,"public/signup.html"))
})

app.listen(port, (err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("server is listening", port);
  }
})