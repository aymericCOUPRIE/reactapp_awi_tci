class Person {

    static greet(...name1) {

        const name = []
        if (name1[0] != null) {
            name1.forEach(value => {
                const tempo = value.toString().split(',')
                name.push(tempo)
            })
        }

        console.log(name)

        let res;
        if (name.length > 1) {

            const upper = []
            const lower = []

            name.forEach(value => {
                console.log("VALUE " + value)
                if (value.toString().toUpperCase() === value) {
                    upper.push(value)
                } else {
                    lower.push(value)
                }
            })

            console.log("LOWER" + lower)
            console.log("UPPER" + upper)

            switch (lower.length) {
                case 2 :
                    res = `Hello, ${lower[0]} and ${lower[1]}`
                    res += "."
                    break;
                default :
                    res = "Hello"
                    let i;
                    for (i = 0; i < lower.length - 1; i++) {
                        res += `, ${lower[i]}`
                    }
                    res += ` and ${lower[i]}.`
            }

            upper.forEach(value => {
                res += ` AND HELLO ${value} !`
            })
            return res
        } else {
            switch (name1[0]) {
                case null :
                    return "Hello my friend."
                    break;
                case name1[0].toString().toUpperCase() :
                    return `HELLO, ${name1[0]}.`
                    break;
                default :
                    return `Hello, ${name1[0]}.`
            }
        }
    }
}


//module.exports = Person

export default Person
