//object literals(non sigelton)

const mysym=Symbol("key1")

const jsuser={
    name:"Ritik",
    age:18,
    "fullname":"Ritik choudhary",
    [mysym]:"mykey1",
    location:"jaipur",
    email:"ritik@google.com",
    isloggedin:false,
    lastllogindays:["monday","saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])      //this is right way to access object
console.log(jsuser["fullname"])
console.log(jsuser[mysym])

jsuser.email="ritik@chatgpt.com"
// Object.freeze(jsuser)      //freeze keyword use to no change in object nexttime
jsuser.email="ritik@microsoft.com"
console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js user") 
}
jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`) 
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())