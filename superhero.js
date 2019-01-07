const Person = require("./person");

const SuperHero = class SuperHero extends Person {

    constructor(name, age, superHeroName) {
        super(name, age) 
        this.m_superHeroName = superHeroName;
    }

    get superHeroName() { return this.m_superHeroName; }
    set superHeroName(superHeroName) { this.m_superHeroName = superHeroName; }

    async describe() {
        if(this.superHeroName.length > 0) {
            return super.describe().then(data => { return `${data} I am also the ${this.superHeroName}`});
        }
    }
}

module.exports = SuperHero;