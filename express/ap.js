const express= require('express');
const app=express()

const people =require('./routers/people')
const login =require('./routers/auth')

//static assests
app.use(express.static('./methods-public'))

//parse from data
// app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())


app.use('/api/people',people)
app.use('/login',login)




app.listen(5000,(req,res)=>{
    console.log("server is listening to port 5000....")
})