const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })

        if(req.url === '/'){
            fs.readFile(path.join(__dirname, "templates", "index.html"), 'utf-8', (err, conten)=>{
                if (err) throw err
                res.end(conten)
            })
        }
    }else if(req.method === 'POST'){
        
        const Body = []

        req.on('data', data =>{
            Body.push(Buffer.from(data))
        })

        req.on('end', ()=>{
            fs.readFile(path.join(__dirname, "templates", "succes.html"), "utf-8", (err, conten)=>{
                if (err) {
                    throw err
                }

                res.end(conten)
            })
        })

    }
})

let port = 5550
server.listen(port, () => {
    console.log(`Server Started on Port: ${port}`);
})
