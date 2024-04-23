//functions

function addtwonumbers(number1,number2){
    return number1+number2
}
let result=addtwonumbers(2,3)
// console.log(result)

function loginusermessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return;

    }
    return `${username} just logged in`
}
// console.log(loginusermessage("Ritik"))
// console.log(loginusermessage())


//rest operator(when we want collect many price in a array)


function calculateprice(...num1){
    return num1
}


function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculateprice(200,400,500))
// console.log(calculatecartprice(200,300,400,500))


const user={
    username:"hitesh",
    price:199

}

function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleobject(user)


//function contains object
handleobject({
    username:"sam",
    price:200
})

const mynewarray=[200,400,100,600]

function returnsecondvalue(getarray){
    return getarray[2]
}
console.log(returnsecondvalue(mynewarray))