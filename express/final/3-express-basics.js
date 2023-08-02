const express=require('express');
const path =require('path');

const app=express();

//setup and middleware
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./nav/easy.html'))

})

app.all('*',(req,res)=>{
    res.status(404).send("resource not found");
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000...")
})
