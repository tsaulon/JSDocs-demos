
/**
 * @param {String} name An argument which represents the name of the person.
 * @param {Number} age An argument which represents the age of the person.
 * @constructor
 */
const Person = class Person {

    constructor(name = "", age = 0) {
        this.m_name = name;
        this.m_age = age;
    }

    get age() { return this.m_age; }
    set age(age) { this.m_age = age; }
    get name() { return this.m_name; }
    set name(name) { this.m_name = name; }

    /**
     * @return {String} Returns a human-readable representation of the Person object.
     */
    async describe() {
        
        if(this.age > 0 && this.name.length > 0) {
            return `${this.name} is ${this.age} years old.`;
        }

    }
}

module.exports = Person;
