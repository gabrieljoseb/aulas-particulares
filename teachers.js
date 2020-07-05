const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
const { age, graduation } = require('./utils')

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "")
            return res.send('please, fill all the fields')
    }

    let { avatar_url, name, birth, degree, modality, lessons } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        degree,
        modality,
        lessons,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('An error occurred!')

        return res.redirect('/teachers')
    })
}

exports.show = (req, res) => {
    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return id == teacher.id
    })

    if (!foundTeacher) res.send('Could not find id')

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        degree: graduation(foundTeacher.degree),
        lessons: foundTeacher.lessons.split(','),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render('teachers/show', { teacher })
}