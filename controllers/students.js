const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { date, grade } = require('../utils')

exports.index = (req, res) => {
    data.students.forEach(student => student.degree = grade(student.degree))

    return res.render('students/index', { students: data.students })
}

exports.create = (req, res) => {
    return res.render('students/create')
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "")
            return res.send('please, fill all the fields')
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if (lastStudent) id = lastStudent.id + 1

    data.students.push({
        id,
        ...req.body,
        birth
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('An error occurred!')

        return res.redirect('/students')
    })
}

exports.show = (req, res) => {
    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return id == student.id
    })

    if (!foundStudent) return res.send('Could not find id')

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthday,
        degree: grade(foundStudent.degree)
    }

    return res.render('students/show', { student })
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return id == student.id
    })

    if (!foundStudent) return res.send('Could not find id')

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }
    
    return res.render('students/edit', { student })
}

exports.update = (req, res) => {
    const { id } = req.body

    const foundStudent = data.students.find(student => id == student.id)

    if (!foundStudent) return res.send('Student not found!')

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.students[Number(id) - 1] = student

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) return res.send('Write file error!')

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredStudent = data.students.filter(student => id != student.id)

    data.students = filteredStudent

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) return res.send('Write file error!')

        return res.redirect('/students')
    })
}