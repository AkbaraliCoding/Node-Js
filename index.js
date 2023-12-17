const { setFips } = require('crypto')
const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url);


    res.write('<h1>HEllo</h1>')
    res.end()
})

let port = 5550
server.listen(port, ()=>{
    console.log(`Server Started on Port: ${port}`);
})
