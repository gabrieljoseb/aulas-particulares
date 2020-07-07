module.exports = {
    age: (timestamp) => {
        const today = new Date()
        const birthDate = new Date(timestamp)

        const age = today.getFullYear() - birthDate.getFullYear()
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
        // some code
    }
}