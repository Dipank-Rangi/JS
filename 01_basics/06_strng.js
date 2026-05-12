const name = "DIPANK"
const repoCount = 50

//console.log( repoCount +name + "value"); -> this syntax is outdated dont use '+' this symbol

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); // use backticks option+tab k uppar wala button , this is string interplation in this we make place holders and insert them at any plaace

const stringName = new String ("Dipank_Rangi") // another way to declare the string  hee it is a object
//console.log(typeof(stringName)); -> object

// console.log(stringName[1]); // string same as in c++
// console.log(stringName.__proto__);


// console.log(stringName.toLowerCase());// it will not change the original string
// console.log(stringName.charAt(0));
// console.log(stringName.indexOf('a'));

const newString = stringName; // end index is not included 
// console.log(newString);

// for (const ele of newString) {
//     console.log(ele);
    
// }

// -> foreach loop doesnot work for string 
// newString.forEach(ele => {
//     console.log(ele);
    
// });

console.log(newString);
// console.log(newString.toUpperCase());
// console.log(newString.toLowerCase());
let newString2 = newString.toUpperCase(); // ab jo ye newstring. h ye purani string ka uppercase ho gyi 
//console.log(newString2); 

let s = "    DIPANK RANGI   " // it will remove starting and ending spaces but it will not remove the in between spaces
console.log(s.trim());
let s1 = s.trim();
//console.log(s1.lastIndexOf('A')); // print the index of last occurrrences of that character

// slice is same as of substring
console.log(s1.slice(3,4));// it will also not not 2nd  index

// split -> to convert a string into array of stirng for better understanding check the given below example
let s3 = "Dipank is a good boy"

let arr = s3.split(' '); //ander vo chij daalo jis basis pe aap unko alg alg krna chahte ho like space any character or anything u want to 
console.log(arr);




