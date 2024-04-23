// object singelton(constructor)

// const tinderuser=new Object()

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false

// console.log(tinderuser)


//nested objects
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"ritik",
        lastname:"choudhary"
    }
}
}
console.log(regularuser.fullname.userfullname.firstname)

//combine objects(two method)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4)   //1.assign keyword

const obj3={...obj1,...obj2,...obj4}             //spread operator
console.log(obj3)


//arrays is collected in the form of object
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
users[1].email

console.log(tinderuser)

//key and value are store in form of array
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))


//to check key is present or not

// console.log(tinderuser.hasOwnProperty('isloggedin'))   
// console.log(tinderuser.hasOwnProperty('islogged'))


const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}

//course.courseinstructor

//destrucure of object(need:baar baar . operator lagakar call lagane se bachene ke liye object mei)

const {courseinstructor:instructor}=course

// console.log(courseinstructor)
console.log(instructor)



//json Talk

// {
//     "name": "Ritik",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[

    {},
    {},
    {}
]

