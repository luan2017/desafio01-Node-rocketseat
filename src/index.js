const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())

//Projects
const projects  = [{id: '0', title: 'Projeto', tasks: ['Tarefa 0', 'Tarefa 1']}, {id: '1', title: 'Projeto 1', tasks: []}]

//Middlewares


function logCountRequest(req, res, next) {
    console.count("Número de requisições");
    return next();
  }

server.use(logCountRequest);
  
function checkId(req, res, next){
    const { id } = req.params
    if(!projects[id]){
        return res.status(400).json({succes: 'false', message: 'Id is required'})
    }

    next()
}

//Get
server.get('/projects', function(req, res, next) {
    res.json({succes: 'true', projects: projects})
})

//GetById
server.get('/projects/:id',checkId , function(req, res, next) {
    const {id} = req.params
    res.json({succes: 'true', project: projects[id]})
})

//Create Project
server.post('/projects', function(req, res, next) {
    const [body] = req.body
    if(body){
      projects.push(body)
   }
    
    res.json({succes: 'true', project: projects})
})

//Create Task
 server.post('/projects/:id/task', checkId, function(req, res, next){
    const { id } = req.params
    const [body] = req.body

    if(body){
        projects[id].tasks.push(body.tasks) 
    }
    

    res.json({succes: 'true', project: projects})
})

//Update
server.put('/projects/:id', checkId, function(req, res, next){
    const [body] = req.body
    const {id} = req.params
    if(body && id){
        projects[id].title = body.title
    }
    
    res.json({succes: 'true', project: projects[id]})
})

//Delete
server.delete('/projects/:id', checkId, function(req, res, next){
    const { id } = req.params

    const projectIndex = projects.findIndex(p => p.id == id);

    projects.splice(projectIndex, 1);
  
    res.json({succes: 'true', projects: projects })
})

server.listen(3333)