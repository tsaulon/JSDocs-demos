/** 
 * Module which exports different types of Person classes.
 * @module People
 */

/**
 * Person class which encapsulates some characteristics of a person.
 * @param {String} name An argument which represents the name of the person.
 * @param {Number} age An argument which represents the age of the person.
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
     * @return {Promise} Returns a Promise object which resolves the description the Person object or rejects with an
     *                   error message.
     */
    async describe() {
        if(this.age > 0 && this.name.length > 0) {
            return `${this.name} is ${this.age} years old.`;
        } else {
            throw `Error, this is an empty object.`
        }
    }
}

/**
 * Superhero class which encapsulates the characteristics of a superhero.
 * @param {String} name An argument which represents the name of the person.
 * @param {Number} age An argument which represents the age of the person.
 * @param {String} superHeroName An argument which represents the name of the superhero.
 * @constructor
 * @extends {People.Person}
 */
const SuperHero = class SuperHero extends Person {

    constructor(name, age, superHeroName) {
        super(name, age) 
        this.m_superHeroName = superHeroName;
    }

    /** @type {String} */
    get superHeroName() { return this.m_superHeroName; }
    set superHeroName(superHeroName) { this.m_superHeroName = superHeroName; }

    /**
     * @async
     * @override 
     * @desc This function describes a human-readable representation of the SuperHero object.
     * @return {Promise} Returns resolved promise of a description of the SuperHero object or rejects an error message.
     */
    async describe() {
        if(this.superHeroName.length > 0) {
            return super.describe().then(data => { return `${data} I am also ${this.superHeroName}`});
        } else {
            throw `Error, this is an empty object.`
        }
    }
}

module.exports = { Person, SuperHero };