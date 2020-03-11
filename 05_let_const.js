let a = 'Var a'
let b = 'Var b'
{
    a = 'new A'
    let b = 'local b'
    let c ='local c'
    console.log(a) // new A
    console.log(b) // local b
}
console.log(a)     // new A
console.log(b)     // Var b
console.log(c)