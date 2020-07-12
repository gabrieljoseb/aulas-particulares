module.exports = {
    age: (timestamp) => {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        const day = today.getDate() - birthDate.getDate()

        if (month <= 0 && day < 0)
            age -= 1

        return age
    },
    graduation: (degree) => {
        if (degree == 'high-school') return "Ensino Médio Completo"
        if (degree == 'college') return "Ensino Superior Completo"
        if (degree == 'masters') return "Mestrado"
        if (degree == 'doctorate') return "Doutorado"
    },
    date: (timestamp) => {
        const stringDate = new Date(timestamp).toISOString()
        const date = stringDate.split('T')[0]

        const day = stringDate.slice(8, 10)
        const month = stringDate.slice(5, 7)
        const year = stringDate.slice(0, 4)
        
        return {
            day,
            month,
            year,
            iso: date,
            birthday: `${day}/${month}`
        }
    },
    grade: (degree) => {
        if (degree.includes('EF')) return `${degree[0]}° ano do ensino fundamental`
        
        return `${degree[0]}° ano do ensino médio`
    }
}