//loops


//while loop
let index=0;
while (index<=10) {
    console.log(`value of index is ${index}`);
    index=index+2;
}

let myarray=["flash","batman","superman"]

let arr=0
while(arr<myarray.length){
    console.log(`value is ${myarray[arr]}`)
    arr=arr+1;
}


//do while loop(it works one time, without checking condition)

let indexi=0
do {
    console.log(`value is ${indexi}`)
    indexi=indexi+1;
} while (indexi<=10);

let indexiy=15
do {
    indexiy=indexiy+1;
    console.log(`value is ${indexiy}`)
} while (indexiy<=10);
