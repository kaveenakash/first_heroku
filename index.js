const express = require('express') 
const app = express()


app.get("/",(req,res) =>{

     res.send("Its working this is me")
})


app.get("/data",(req,res) =>{

     res.send("Next api you got it")
})




app.listen(process.env.PORT || 5000)