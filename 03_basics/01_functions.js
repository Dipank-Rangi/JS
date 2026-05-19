let fun = function(){
    console.log("HELLO DIP");
    
}

function myName(){
    console.log("DIPANK IS AN IITian");
    
}

//myName // -> ye funcction ka reference hai

// myName()-> ye function ko call kr rha hai 

// function ko kaise call kre
//fun()
//myName()

function add2Number(a,b){
    return a+b;
}
// jb hum function se kuch return krva rhe hain toh hume console.log ki need hoti hain
//console.log(add2Number(1,2));

// jb humara function kuch return kr rha hai tbhi hum us ko kisi or variable main store kr paaye ggye
let sum = add2Number(2,3);
//console.log(sum);

function loginUserMessage(username = "SAM"){ // agr humne kuch bhi pass nhi kiya toh vo sam use kre gya pass ki toh jo pass ki h usi ko use kre gya

    // if(username === undefined){
    //     console.log("PLEASE ENTER UR NAME !");
    //     return;
        
    // }
    
    if(!username){
        console.log("PLEASE ENTER UR NAME !");
         return;
    }
    return ` Hey ${username} , you are successfully loggen in .`;
}

 //console.log(loginUserMessage("DIPANK"));

// agar hum kuch bhi pass nhi kre gye toh uski jgh undefined likha hua aaye gya na ki null

 //console.log(loginUserMessage());


// situation -> we dont know how many parameters will be given to any function
// 3 dot ... -> yahi rest or spread operator 
function calculatecartPrice(...num1  ){ // an ye jitne argument hum pass kre gye sab ko return kr dega
    return  num1
}
// it will return as array

// console.log(calculatecartPrice(20,30,40));


// how to pass an object in a function
const user ={
    username:"DIPANK",
    price:2323
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
    
}

// we can direct pass the value or passing by storing it in array
//handleObject(user)

// handleObject({
//     username:"SAM",
//     price:249
// })

let myArr =[200,200,121]

function returnValue(myArr){
    return myArr[2];
}
//console.log(returnValue(myArr));

console.log(returnValue([2,3,4,5]));


