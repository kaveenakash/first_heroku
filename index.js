const express = require('express') 
const mongoose = require('mongoose') 
const app = express()
const Sample = require('./models/Sample')
app.use(express.json())

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log(`DB connection estabilished`))
.catch(() => console.log(`DB connection error`))

app.get("/",(req,res) =>{

     res.send("Hurrye")
})
app.get("/getData",(req,res) =>{

    Sample.find({},(err,data) =>{
        if(err){
            return res.status(400).json({
                error:`Error Occured`
            })
        }
        return res.status(200).json({
            data:data
        })
    })
})


app.post("/sendData",(req,res) =>{

    const {name,age} = req.body
    let newSample = new Sample({name,age})
    newSample.save((err,data) =>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        return res.status(200).json({
            data:data
        })
    })
})




app.listen(process.env.PORT || 5000)