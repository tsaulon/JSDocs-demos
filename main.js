//  This module purposely doesn't use comment conventions.
const counter = require('./counter')(5, 5);
const People = require("./people");

let arr = [];

for(let i = 0; i < 10; i++) {
    arr.push(counter());
}

console.log(arr.filter(e => e % 2 === 0));

let secretIdentity = new People.Person("Tyrone", 24);
secretIdentity.describe().then(console.log).catch(console.error);

let hero = new People.SuperHero("Tyrone", 24, "The Flash");
hero.describe().then(console.log).catch(console.error);