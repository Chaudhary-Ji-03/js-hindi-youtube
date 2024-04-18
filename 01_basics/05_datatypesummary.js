//primitive

// types:String,Number,Boolean,Null,undefined,symbol,BigInt

// const score=100;
// const scoreValue=100.3

// const isLoggedIn=false
// constoutsideTemp=null
// let userEmail;
// const id=symbol('123')
// const anotherId=symbol('123')

// console.log(id==anotherId)

const bigNumber=45457414541454547646n

//Reference(non primitive)

//Array,objects,Functions

// const heroes=["shaktiman","naagraj","doga"];
// let myobj={
//     name:"hitesh",
//     age:22
// }

// const myfunction=function(){
//     console.log("hello world");
// }

// console.log(typeof myfunction)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive), Heap(non-primitive)

let myYoutubename="hiteshchoudharydotcom"

let anothername=myYoutubename
anothername="chai aur code"
console.log(myYoutubename)
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userOne
usertwo.email="hitesh@google.com"

console.log(userOne.email)
console.log(usertwo.email)