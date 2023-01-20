const Student = require('../js/student.js')
const {describe, it, expect, jest: requiredJest, afterAll} = require("@jest/globals");


describe('Student', () => {
    let name = 'Alex'
    let surname = 'Levy'
    let birthYear = 2000
    const grades = [100,100,100,100,100]
    console.log = requiredJest.fn()

    it('should create student', () => {
        const student = new Student(name, surname, birthYear, grades)
        expect(student.name).toBe(name)
        expect(student.surname).toBe(surname)
        expect(student.birthYear).toBe(birthYear)
        expect(student.grades).toEqual(grades)
    })

    it('should get age', () => {
        const student = new Student(name, surname, birthYear, grades)
        expect(student.getAge()).toBe(23)
    })

    it('should throw TypeError', () => {
        expect(() => new Student(name, 10, birthYear, grades)).toThrow('Name or surname ' +
            'is not a string')
        expect(() => new Student(name, surname, 'year', grades)).toThrow('Year of birth ' +
            'is not a number')
        expect(() => new Student(name, surname, birthYear, '10, 10, 5')).toThrow('Grades is ' +
            'not an array')
    });
    it('should return Good summary', () => {
        const student = new Student(name, surname, birthYear, grades)
        for (let i = 0; i < 25; i++) {
            student.present()
        }
        student.summary()
        expect(console.log).toBeCalledWith('Молодець!')
    })
    it('should return "Good, but can be better" summary', () => {
        const student = new Student(name, surname, birthYear, grades)
        for (let i = 0; i < 20; i++) {
            student.present()
        }
        student.summary()
        expect(console.log).toBeCalledWith('Добре, але можна краще')
    })
    it('should return Bad summary', () => {
        const badGrades = [60, 60, 40, 50, 10]
        const student = new Student(name, surname, birthYear, badGrades)
        for (let i = 0; i < 20; i++) {
            student.present()
        }
        student.summary()
        expect(console.log).toBeCalledWith('Редиска!')
    })
});
