
const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("hiiii")
});

app.get("/about",(req,res)=>{
    res.send("contact me at yago@gmail.com")
})

app.get("/hobbies",(req,res)=>{
    res.send("i like code,imortality and plants")
})


	

app.listen(3000 ,()=>{
    console.log('server started on port 3000')
});
