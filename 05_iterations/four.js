//for in loop in object

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key])
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

//for in loop in array
const programming=["js","rb","py","java","cpp"]

for (const key in programming) {
    //console.log(key)
    //console.log(programming[key])
}


//for in object(object mei mei ye loop iterate nahi hai)

const map=new Map()
map.set('IN',"india")
map.set('usa',"United states of America")
map.set('Fr',"France")
map.set('IN',"india")

for (const key in map) {
    //console.log(key)
}

