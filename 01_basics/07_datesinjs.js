//Dates

// let mydate=new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(typeof mydate)

// let mycreateDate=new Date(2024,0,21)
// let mycreateDate=new Date(2024,0,21,5,3)
// let mycreateDate=new Date("2023-01-14")
let mycreateDate=new Date("01-14-2024")
// console.log(mycreateDate.toLocaleString())


// let mytimestamp=Date.now() //here time got in milisecond
// console.log(mytimestamp)
// console.log(mycreateDate.getTime())    //it converts time into milisecond

// console.log(Math.floor(Date.now()/1000))   //here time is converted into second

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})