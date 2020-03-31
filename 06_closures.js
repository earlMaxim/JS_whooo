// замыкания - функция имеет доступ к переменным из вышестоящего scope
// function sayHelloTo(name){
//     const message = 'Hello ' + name
//     return function(){
//         console.log(message)
//     }
// }

// const helloMax = sayHelloTo('Max')
// console.log(helloMax())

// function createFrameworkManager(){
//     const fw = ['Angular', 'React']

//     return {
//         print: function(){
//             console.log(fw)
//         },
//         add: function(framework){
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// manager.print()
// manager.add('Vue.js')
// console.log(manager)

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for( var i = 0; i<fib.length; i++){
    (function (j){
        setTimeout(function(){
            console.log(`fibs[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}