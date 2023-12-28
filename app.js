const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url  ==='/'){
        res.end(req.url)
    }
    if(req.url==='/about'){
        res.end('Welcome to our homepage')
    }
    res.end('404 NOT FOUND')

})

server.listen(8080);