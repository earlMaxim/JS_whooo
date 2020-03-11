// замыкания - функция имеет доступ к переменным из вышестоящего scope
// function sayHelloTo(name){
//     const message = 'Hello ' + name
//     return function(){
//         console.log(message)
//     }
// }

// const helloMax = sayHelloTo('Max')
// console.log(helloMax())

function createFrameworkManager(){
    const fw = ['Angular', 'React']

    return {
        print: function(){
            console.log(fw)
        },
        add: function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager)