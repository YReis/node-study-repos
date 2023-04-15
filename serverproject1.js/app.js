const express= require('express')
const mongoose = require('mongoose')
const bodyParser=require("body-parser")
const ejs = require("ejs")
const app = express()

app.set("view egine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
mongoose.connect("mongodb+srv://yago:yago123@cluster0.i9zbtqo.mongodb.net/?retryWrites=true&w=majority",{
    usenewUrlParser:true,
    useUnifiedTopology:true
}
)
const articleSchema = {
    title:String,
    content:String
}
const Article = mongoose.model("Article",articleSchema)


app.get("/articles",(req,res)=>{
    
    Article.find((err,foundArticles)=>{
        if (!err){
            res.send(foundArticles)
        }else
        res.send(err)
    })
})

app.listen('3000',(res)=>{
    console.log("server running on 3000")
})