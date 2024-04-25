//aaj hamne ye saare symbol padha hai

// <, >, <=, >=, ==,!=, ===

if(2=="2"){
    console.log("executed")
}

if(2!=3){
    console.log("2nd condition executed")
}

//===(this operator check type of data also)
if(2==="2"){
    console.log("executed")
}

const temperature=41

if(temperature <50){
    console.log("less than 50")
}else {
    console.log("temperature is greater than 50")
}
console.log("summer is going on")


const score=200

if(score >100){
    //let power="fly"
    var power="fly"
    console.log(`user power: ${power}`)
}
console.log(`user power: ${power}`)


const balance=1000

//implicit code
//if(balance>50)   console.log("test"),console.log("test2")             //never write this type of code don't show oversmart

if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}


//Real life example

const userloggedin=true
const debitcard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true

if(userloggedin &&debitcard &&2==2){
    console.log("allow to buy course")
}
if(loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in")
}

