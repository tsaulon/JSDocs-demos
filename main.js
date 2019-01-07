const counter = require('./counter')(5, 5);
const Person = require("./person");
const SuperHero = require("./superhero");
console.log(Person);

let arr = [];

for(let i = 0; i < 10; i++) {
    arr.push(counter());
}

console.log(arr.filter(e => e % 2 === 0));

let secretIdentity = new Person("Tyrone", 21);
secretIdentity.describe().then(console.log).catch(console.error);
let hero = new SuperHero("Tyrone", 21, "T Steakinator");
hero.describe().then(console.log).catch(console.error);