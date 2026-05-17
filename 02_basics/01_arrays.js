// array
// -> resizable , diff datatype store , 0-baseindexexd
// shallow copy -> share the same reference means if u will change something here it will also change in main also
// deep copy -> does not share same reference 
let myarr = [1,2,3,4,5,true,"dipank"]

let myArr = new Array(1,2,3,4,5)

//console.log(myArr);

// ARRAY METHODS

myArr.push(13);
//console.log(myArr);
myArr.pop();
//console.log(myArr);

// insert at front ->unshift()
// remove from front->shift()

myArr.unshift(12);
//console.log(myArr);
myArr.shift();
//console.log(myArr);

// new fun

//console.log(myArr.includes(2)); // return boolean type
//console.log(myArr.indexOf(3)); // return int (-1)if not present in arr

// join -> insert all values of one arr to another string or arr

const arr = myArr.join() // but return type will be string
// console.log(arr);
// console.log(typeof(arr));

// slice  , splice

console.log('A', myArr);
// slice will not remove that ele from myArr
const myNew = myArr.slice(1,3); // include 1 2 not 3rd index

console.log(myNew);
console.log('B', myArr);
// splice -> remove the ele from the array where they are pre exiting and it also include the both index staring and ending (1,3 dono array se remove ho jaye gye myNew1 main add ho jaye gye )
const myNew1 = myArr.splice(1,3);
console.log(myNew1);
console.log('c', myArr);
