//for each loop

//for each loop basically apne andar callback function rakhta hai

//callback function ka malab jis function ka koi name nhi hai aur wah array ke iterate time argument leta hai

const coding=["js","rb","py","java","cpp"]

//for each loop in normal function

// coding.forEach(function (item){
//     console.log(item)
// })

//for each loop in arrow function

// coding.forEach((value)=>{
// console.log(value)
// })

//reference
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

//many argument passed in callback(to get index value,whole array)
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


//when array contains many object then mostly use for each loop(uses :- database se jab value aati hai tab wah array ke form mei aati hai aur array ke andar bahut saare object rahte hai)
const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagename)
})

