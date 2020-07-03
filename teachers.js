const fs = require('fs')
const data = require('./data.json')

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