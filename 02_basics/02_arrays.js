let arr1 = ["deep" , "ritu" , " namrta"]
let arr2 = ["brother" , "sister","sister"]

//arr1.push(arr2)

//console.log(arr1); // ye arr2 ko ek array hi pass krta h na ki uske hr ek ele ko ek ele ki trh pass krta hai


// concat -> add every ele like as an separate ele and u have to store this in a new arr becoz it retun a new arr

let newArr = arr1.concat(arr2);
//console.log(newArr);

// spread all ele of each array && isme hum kitne bhi array ko ek sath add kr skte hai 
// this is same as of concat but prefer it 
const newarr = [...arr1 , ...arr2];
//console.log(newarr);

