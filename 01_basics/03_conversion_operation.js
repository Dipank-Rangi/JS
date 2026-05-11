// falsy values -> false condition , null , 0 , "" , false , NaN , undefined

//let score = "33abc" NaN->Not A NUMBER
//let score = null
//let score = undefined
let score = false

// console.log(typeof score);
let valueInNumber = Number(score)
// console.log(typeof valueInNumber );
// console.log( valueInNumber );


// "33" -> 33
// "32ab" -> NaN
// null -> NaN
// true -> 1


let loggedIn = ""

let bool = Boolean(loggedIn)
// console.log(typeof(loggedIn));
// console.log(typeof(bool));
// console.log(bool)

// 1-> true
// 0-> false
// "" -> false
//"DEp" -> true

let someNum = true

let stringNum = String(someNum)

// console.log(typeof(stringNum));
// console.log(stringNum);

// *********** Operations ************

let value = 3
let negValue = - value
//console.log(negValue);

//console.log(2**3); // a**b -> a ki pow b

let str1 = "hello"
let str2 = " Deep"
let str3 = str1 + str2 // we can add two strings 

// console.log("1"+2+2);  first so string
// console.log(1+2+"2"); first number so treat is as a number

let gameCounter = 100

console.log(gameCounter++);
console.log(gameCounter);





