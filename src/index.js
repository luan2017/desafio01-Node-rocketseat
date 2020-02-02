const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())

//Get
server.get('/', function(req, res, next) {
    res.json({message: 'Get Sucessfull'})
})

//GetById
server.get('/:id', function(req, res, next) {
    res.json({message: 'Get By Id sucessful'})
})

//Create Project
server.post('/', function(req, res, next) {
    res.json({message: 'Create Sucessfull'})
})

//Create Task
server.post('/', function(req, res, next){
    res.json({message: 'Create Task Sucessfull'})
})

//Update
server.put('/:id', function(req, res, next){
    res.json({message: 'Update Sucessfull'})
})

//Delete
server.delete('/:id', function(req, res, next){
    res.json({message: 'Deleted Sucessfull'})
})

server.listen(3333)