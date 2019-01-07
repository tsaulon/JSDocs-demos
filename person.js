const Person = class Person {

    constructor(name = "", age = 0) {
        this.m_name = name;
        this.m_age = age;
    }

    get age() { return this.m_age; }
    set age(age) { this.m_age = age; }
    get name() { return this.m_name; }
    set name(name) { this.m_name = name; }

    async describe() {
        
        if(this.age > 0 && this.name.length > 0) {
            return `${this.name} is ${this.age} years old.`;
        }

    }
}

const SuperHero = class SuperHero extends Person {

    constructor(name, age, superHeroName) {
        super(name, age);
        this.m_superHeroName = superHeroName;
    }
}

module.exports = Person;
module.exports = SuperHero;