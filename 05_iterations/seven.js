//map loop(ye filter ke hi tarah hota hai lagbhag but yaad rakhe ki filter basically true aur false hi raturn karta hai 
//jabki map value ko change kar sakta hai matlas value ke uper operation perform karta hai)

//map

const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.map((num)=>num+10)
console.log(newnums)

//chaining method
const newNums = mynums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);