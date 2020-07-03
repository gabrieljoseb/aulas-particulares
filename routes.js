const express = require('express')
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.redirect('/teachers')
})

routes.get("/teachers", (req, res) => {
    return res.render('teachers/index')
})

routes.get("/teachers/create", (req, res) => {
    return res.render('teachers/create')
})

routes.post("/teachers/create", (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "")
            return res.send('please, fill all the fields')
    }

    return res.send(req.body)
})

routes.get("/students", (req, res) => {
    return res.send('students')
})

module.exports = routes