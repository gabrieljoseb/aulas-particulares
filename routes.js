const express = require('express')
const routes = express.Router()
const teachers = require('./controllers/teachers')

routes.get("/", (req, res) => {
    return res.redirect('/teachers')
})


routes.get("/teachers", teachers.index)
routes.get("/teachers/create", teachers.create)
routes.get("/teachers/:id", teachers.show)
routes.get("/teachers/:id/edit", teachers.edit)
routes.post("/teachers", teachers.post)
routes.put('/teachers', teachers.update)
routes.delete('/teachers', teachers.delete)

routes.get("/students", (req, res) => {
    return res.send('students')
})


module.exports = routes