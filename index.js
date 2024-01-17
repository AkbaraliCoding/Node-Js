const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        if (req.url === '/') {
            fs.readFile(path.join(__dirname, "templates", "index.html"), 'utf-8', (err, conten) => {
                if (err) throw err
                res.end(conten)
            })
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, "templates", "about.html"), 'utf-8', (err, conten) => {
                if (err) throw err
                res.end(conten)
            })
        } else if (req.url === '/contact') {
            fs.readFile(path.join(__dirname, "templates", "contact.html"), 'utf-8', (err, conten) => {
                if (err) throw err
                res.end(conten)
            })
        } else if (req.url === '/api/admin') {
            res.writeHead(200, { 'Content-Type': 'text/json' })
            const admin = {name: 'akbarali', surname: 'nematjonov', age: 14}

            res.end(JSON.stringify(admin))
        }
    } else if (req.method === 'POST') {

        const Body = []

        req.on('data', data => {
            Body.push(Buffer.from(data))
        })

        req.on('end', () => {
            fs.readFile(path.join(__dirname, "templates", "succes.html"), "utf-8", (err, conten) => {
                if (err) {
                    throw err
                }

                res.end(conten)
            })
        })

    }
})

let port = 3000
server.listen(port, () => {
    console.log(`Server Started on Port: ${port}`);
})
