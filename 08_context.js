// const person = {
//     surname: 'Stark',
//     knows: function (what, name){
//         console.log(`You ${what} know, ${name} ${this.surname}`)
//     }
// }
// const john = {surname: 'Snow'}

// person.knows('All', 'Bran')
// person.knows.call(john,'nothin', 'Jhon')
// person.knows.apply(john,['nothin', 'Jhon'])
// person.knows.call(john,...['nothin', 'Jhon'])
// const bound = person.knows.bind(john,'nothin', 'Jhon')
// bound()


// =========

// function Person (name, age){
//     this.name = name
//     this.age = age

//     console.log(this)
// }

// const elena = new Person('Elena', 20)

// // ========= явная передача контекста

// function logThis(){
//     console.log(this)
// }

// const obj = {num: 43}

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// // ========= неявная передача контекста

// const animal = {
//     legs = 4,
//     logThis: function(){
//         console.log(this)
//     }
// }

// animal.logThis

// arrow in context

function Cat(color){
    this.color = color
    console.log('this', this)
    ;(()=> console.log('Arrow this', this))()
}
new Cat('red')