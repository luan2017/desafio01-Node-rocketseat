const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())

server.get("/usr", function(req, res, next) {
    res.json("Hello World")
})

server.listen(3333)