const express = require('express')
const bodyParser = require("body-parser")
const mongu = require('mongoose')
const app = express()
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs')
app.use(express.static('./public'))
//mongoose.connect('mongodb://localhost/formdata')
mongoose.connect('mongodb://arjun1:arjun1@ds259253.mlab.com:59253/mongouploads')


var user = mongoose.model('formData',{
  email:String,
  name:String,
  age:Number,
})

app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');
})

app.post('/new',function(req,res){
const studentDetails = new user({ 
    email:req.body.email,
    name:req.body.name,
    age:req.body.age,
})
studentDetails.save().then(function(data){
  res.send(data)},function(err){
    res.send(err)
  })
})
app.listen(9000,function(){
    console.log('server started')
})