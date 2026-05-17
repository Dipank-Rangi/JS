const score = new Number (100) // to define ds of that variable
// by defining its ds we can use its prototype or in built functions
const score1 = 200
// console.log(score);
// console.log(score1);

//console.log(score.toString().length);


// precision value 
//console.log(score.toFixed(2)); // used to ficx decimal upto 2 ya jo bhi umber aap iske ander pass kre gye tb tk 

const num = 123.698

//console.log(num.toPrecision(5)); // returns a string && jo bhi ander value pass kri h utne hi kr dega same as of significant digit

//           ******
let cost = 1000000
// comma lga dega US system k acc
//console.log(cost.toLocaleString());
// agr indian sytem k lia chaia toh
//console.log(cost.toLocaleString('en-IN'));

// ************** Maths ***************

//console.log(Math);
// console.log(Math.abs(7-10)); // +ve value

// console.log(Math.round(-4.8)); // used to round off the value 

// console.log(Math.ceil(-3.9)); // ceil->always choose one more value than given number if it contain decimal 

// console.log(Math.floor(4.5)); // is number k left m jo first integer h vo return kre gya 

// console.log(Math.sqrt(16));
// console.log(Math.pow(5,3)); // 5**2 same as power
// console.log(Math.min(2,3,4,0));
// console.log(Math.max(2,3,4,5));

// IMP

console.log(Math.random());// always between 1 and 0
console.log((Math.random()*10)+1); // agr kabhi value 0.01 hui  toh 1- se multiply krne k baad vo zero d de gya usko avoid krne k lia humne 1 add kr diya 
// floor to get number not decimal

const min = 1
const max = 6

// used to print any random number btween max and min
//console.log(Math.floor((Math.random() * (max-min+1)) + min ) );



//console.log(Math.floor((Math.random()* max-min+1)+min));
