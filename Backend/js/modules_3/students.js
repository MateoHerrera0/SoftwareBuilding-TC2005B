export default class student
{
    constructor(name, surname, email)
    {
        this.name = name
        this.surname = surname
        this.email = email
    }

    printInfo()
    {
        console.log(`Name: ${this. name} ${this.surname} Email: ${this.email}`)
    }
}