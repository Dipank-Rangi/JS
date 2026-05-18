let arr1 = ["deep", "ritu", " namrta"]
let arr2 = ["brother", "sister", "sister"]

//arr1.push(arr2)

//console.log(arr1); // ye arr2 ko ek array hi pass krta h na ki uske hr ek ele ko ek ele ki trh pass krta hai


// concat -> add every ele like as an separate ele and u have to store this in a new arr becoz it retun a new arr

let newArr = arr1.concat(arr2);
//console.log(newArr);

// spread all ele of each array && isme hum kitne bhi array ko ek sath add kr skte hai 
// this is same as of concat but prefer it 
const newarr = [...arr1, ...arr2];
//console.log(newarr);

let uniArr = [1, 2, 3, [3, 4], 5, [[6, 7], 8], 9]
let uniArr2 = [0, 0]
let anoArr = uniArr.flat(3); // ander depth dete hai ki kitne tk jaana h alwaysu csn give infinity 
//console.log(anoArr);

let uniArr1 = [...uniArr, ...uniArr2] // spread se nhi ho rha ye jo flat kr pa rha hai 
//console.log(uniArr1);


// we can ask that the given object is array or not

//console.log(Array.isArray("DIPANK"));// return boolean
//console.log(Array.from("DIPANK  i s ")); // make array from each ele of the given thing it read space also

// ****************************
// if u pass object in this then u have to specify ki kiska array bnana h key ka ya value
// if u didnt specify then it will return an empty array
//console.log(Array.from({name:"DIP"}));

// u can use Aray.of instead of Array.from
let score1 = 10, score2 = 20, score3 = 30
// Array.from is not working here?

console.log(Array.of(score1, score2, score3));
