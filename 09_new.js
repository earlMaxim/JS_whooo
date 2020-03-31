// function Cat(color, name){
//     this.color = color
//     this.name = name
// }

// const cat = new Cat('black', 'cot')
// console.log(cat)


// // вот так работает 'new'
// function myNew(constructor, ...args){
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }

// const cat = myNew (Cat, 'black', 'cat')
// console.log(cat)

