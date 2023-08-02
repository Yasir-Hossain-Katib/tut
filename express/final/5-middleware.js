const morgan=require('morgan')
const logger =require("./logger");
const authorize=require("./authorize");


//req => middleware => res

// const logger =(req,res,next)=>{
//     const method=req.method;
//     const url=req.url;
//     const time=new Date().getFullYear();
//     console.log(method,url,time)
//     next()
// }

// 1. use vs route
// 2.options - our own/express /third party

// app.use('/api',logger);

// app.use([logger,authorize])
// app.use(express.static('./public))

app.use(morgan('combined'))

app.get("/",(req,res)=>{
   
    res.send("Home")
})

app.get("/about",(req,res)=>{
    res.send("About")
})

app.get("/api/products",(req,res)=>{
    res.send("Products")
})

app.get("/api/items",(req,res)=>{
    console.log(req.user)
    res.send("Items")

})


