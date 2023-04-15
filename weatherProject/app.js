const express = require('express');
const app = express()
const https = require('https')
const bodyParser = require(`body-parser`)
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   res.sendFile(__dirname + `/index.html`)
})
app.post('/',(req,res)=>{
    console.log(req,res)
    const apiKey=`appid=81a5bce4b69c514c915a3792dbb7a3d2`
    const query= req.body.cityName
    const unit="metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&${apiKey}&units=${unit}`
    https.get(url,(response)=>{
       
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const url=`http://openweathermap.org/img/wn/${icon}@2x.png`
            console.log(weatherData)
            res.write(`<p>the weather in the ${query} is ${description} </p>`)
            res.write(`<h1> with a temperature of ${temp}</h1>`)
            res.write(`<img src=${url}></img>`)
            res.send()
        })
    })
}
)




app.listen(3000,()=>{
    console.log('server is runing')
})