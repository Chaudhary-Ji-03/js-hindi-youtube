//for of(is loop mei object means kis par loop lagana hai yah mat samajhna ki ye original object hai)
 //is loop mei mujhe iteration initialozation kuch nahi batana hota hai

 //["","",""]
 //[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
   // console.log(num)
}

const greetings="hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//maps(it contains uniquekey value)

const map=new Map()
map.set('IN',"india")
map.set('usa',"United states of America")
map.set('Fr',"France")
map.set('IN',"india")

console.log(map)

for (const key of map) {
    console.log(key)
}

//we want print key and value alag alag

for (const [key,value] of map) {
    console.log(key,':-',value)
}


//object par iterate karne ke liye for of loop nahi lagta hai usko iterate karne ke liye for in loop lagaya jata hai
const myobject={
    'game1':'NFS',
    'game2':'spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key,':-',value)
// }
