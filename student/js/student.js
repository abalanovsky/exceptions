class Student {
    constructor(name, surname, birthYear, grades) {
        if (typeof name === 'string' && typeof surname === 'string') {
            this.name = name
            this.surname = surname
        } else {
            throw TypeError('Name or surname is not a string')
        }
        if (typeof birthYear === 'number') {
            this.birthYear = birthYear
        } else {
            throw TypeError('Year of birth is not a number')
        }
        if (Array.isArray(grades)) {
            this.grades = [...grades]
        } else {
            throw TypeError('Grades is not an array')
        }
    }
    #visiting = Array(25)
    #currentLesson = 0
    #setVisit(value) {
        if(this.#currentLesson < 25) {
            this.#visiting[this.#currentLesson] = value
            this.#currentLesson++
        } else {
            throw RangeError('Max number of visits has been reached')
        }
    }
    absent() {
        this.#setVisit(false)
    }
    present() {
        this.#setVisit(true)
    }
    getAge() {
        return new Date().getFullYear() - this.birthYear
    }
    summary(){
        const presentsCount = this.#visiting.filter(visit => visit === true).length
        const visitingAverage = presentsCount / this.#visiting.length
        const gradesSum = this.grades.reduce((prev, current) => prev + current)
        const gradesAverage = gradesSum / this.grades.length
        if (visitingAverage >= 0.9 && gradesAverage >= 90) {
            console.log('Молодець!')
        } else if (visitingAverage < 0.9 && gradesAverage < 90) {
            console.log('Редиска!')
        } else {
            console.log('Добре, але можна краще')
        }
    }
}

const grades1 = [90, 95, 90, 95, 100]
const stud1 = new Student('Mary','Grimes',2000, grades1)
for(let i = 0; i < 25; i++){
    stud1.present()
}
console.log('Example 1')
stud1.summary()


const grades2 = [30, 85, 70, 55, 60]
const stud2 = new Student('Steve','Carell',2000, grades2)
for(let i = 0; i < 25; i++){
    stud2.present()
}
console.log('Example 2')
stud2.summary()

const grades3 = [30, 25, 20, 55, 60]
const stud3 = new Student('Ron','Funches',2000, grades3)
for(let i = 0; i < 15; i++){
    stud3.present()
}
console.log('Example 3')
stud3.summary()

// module.exports = Student;
