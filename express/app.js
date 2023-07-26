const http=require('http')

const {readFileSync}=require('fs')

//get all files

const homePage=readFileSync('./nav/easy.html')
const homeStyles=readFileSync('./nav/style.css')
const homeImage=readFileSync('./nav/logo.png')


const server=http.createServer((req,res)=>{
    //console.log(req.method)
    //console.log(req.url)
    //home
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(homePage)
        //res.end(styles)
        res.end()

    }

    //about
    else if(req.url==="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.end('<h1>About Page</h1>')
        res.end()
    }

    //styles
    else if(req.url==="/style.css"){
        res.writeHead(200,{'content-type':'text/css'})
        res.end(homeStyles)
        res.end()
    }

    //image logo
    else if(req.url==="/logo.png"){
        res.writeHead(200,{'content-type':'image/png'})
        res.end(homeImage)
        res.end()
    }


    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1>Page not found</h1>')
        res.end()

    }
})

server.listen(5000)