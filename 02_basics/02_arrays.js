const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batsman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])
// console.log(marvel_heros[3])
// console.log(marvel_heros)

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)


//spread operator (which is use to add two arrays)
// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_anotherarray=anotherarray.flat(Infinity)
// console.log(real_anotherarray)

//convert anything into array by using from and of method
console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))

let score1=100;
let score2=100
let score3=100
let score4=100

console.log(Array.of(score1,score2,score3,score4))