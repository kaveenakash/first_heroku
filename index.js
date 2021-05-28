const express = require('express') 
const mongoose = require('mongoose') 
const app = express()

app.use(express())

mongoose.connect("mongodb://localhost:27017/kavlum",{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log(`DB connection estabilished`))
.catch(() => console.log(`DB connection error`))

app.get("/",(req,res) =>{

     res.send("Its working this is me")
})


app.get("/data",(req,res) =>{

     res.send("Next api you got it")
})




app.listen(process.env.PORT || 5000)