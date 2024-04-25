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
// console.log(c)


let a=300
if(true){
    let a=10
    const b=20
    var c=30
    // console.log("inner:",a)
}
// console.log("outer:",a)



//closure property(function ke andar function rahta hai, jisme chota function bade wala function ko access kar sakta hai )

function one(){
    const username="Ritik"

    function two(){
        const website="youtube"
        console.log(username);
    }

    //console.log(website)   //website scope is end so error is generated
    // two()
}
// one()


if(true){
    const username="Ritik"
    if(username==="Ritik"){
        const app="chai aur code"
        // console.log(username+app)
    }
    // console.log(app)
}
// console.log(useranme)


//hoisting and functioning difining two method

callanchal(10)
function callanchal(num){
console.log(2+num)
}

//callnisha(nisha)
const callnisha=function(name){
    console.log("hello"+" "+name)
}
// callnisha("nisha")
