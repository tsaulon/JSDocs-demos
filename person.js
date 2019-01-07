/**
 * Person class which encapsulates some characteristics of a person.
 * @param {String} m_name An argument which represents the name of the person.
 * @param {Number} m_age An argument which represents the age of the person.
 * @constructor
 */
const Person = class Person {

    constructor(name = "", age = 0) {
        this.m_name = name;
        this.m_age = age;
    }

    /** @type {Number} */
    get age() { return this.m_age; }
    set age(age) { this.m_age = age; }
    /** @type {String} */
    get name() { return this.m_name; }
    set name(name) { this.m_name = name; }

    /**
     * @async
     * @desc This function resolves a human-readable representation of the Person object.
     * @return {Promise} Returns a Promise object which describes the Person object.
     */
    async describe() {
        if(this.age > 0 && this.name.length > 0) {
            return `${this.name} is ${this.age} years old.`;
        }
    }
}

module.exports = Person;
