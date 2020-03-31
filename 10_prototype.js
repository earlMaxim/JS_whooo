// __proto__
// Object.getPrototypeOf()

// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// Cat.prototype.voice = function (){
//     console.log(`Cat ${this.name} saya myay`)
// }

// const cat = new Cat ('cat', 'white')

// cat.voice()
// console.log(Cat.prototype)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)


// ===================

function Person(){
}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Max' 

console.log('skin' in person)
console.log(person.hasOwnProperty('skin'))

// Object.create()

const proto = {year:2019}
const myYear = Object.create(proto)

console.log(myYear)