// let a=10
// let b=20
// var c=30



{
//     let a=10
// const b=20
var c=30
}

// console.log(a)
// console.log(b)
console.log(c)


let a=300
if(true){
    let a=10
    const b=20
    var c=30
    console.log("inner:",a)
}
console.log("outer:",a)