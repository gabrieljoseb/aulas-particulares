module.exports = {
    age: (timestamp) => {
        const today = new Date()
        const birthDate = new Date(timestamp)

        const age = today.getFullYear() - birthDate.getFullYear()
        //7 - 5 (positivo ja passou, negativo vai passar e 0 está no mes)
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
    }
}