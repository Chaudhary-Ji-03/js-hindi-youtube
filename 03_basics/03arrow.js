
//this function(it works on current context)

//in browser global object is window when you use this keyword(console.log(this))

const user={
    username:"Ritik",
    price:999,


    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomemessage()

user.username="sam"

user.welcomemessage()

console.log(this)

//note:-this keyword is only work in object ,not used in function and arrow function

// function chai(){
//     let username="ririk"
//     console.log(this.username)
// }
// chai()


// const chai=function (){
//         let username="ririk"
//         console.log(this.username)
//     }
//     chai()


//arrow function
// const chai=() =>{
//         let username="ririk"
//         console.log(this.username)
//     }
//     chai()


const addtwo=(num1,num2)=>{
return num1+num2
}

// console.log(addtwo(3,4))

//implicit return
// const addtwon=(num1,num2)=> num1+num2
// const addtwon=(num1,num2)=> (num1+num2)

//for reurning any object use alway parenthesis({})
const addtwon=(num1,num2)=>({username:"shukla"})
console.log(addtwon(3,7))

