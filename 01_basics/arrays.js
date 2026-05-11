 arr=[1,3,2,4]; // const arr means we can insert , update and delete arr eleemts but we can receclre the arr
n = arr.length;
// for(let i = 0 ; i<n ;i++){
//     console.log(arr[i]);
    
// }
arr.push(9); // add in the last
//console.log(arr);
arr.pop(); // remove from the last 
arr.unshift(13);// add at first 
arr.shift(); // removes the starting element
//console.log(arr);


a = [5,6];
for(let i =0 ; i<a.length ; i++){

   // console.log(i , a[importScripts]);   
}

// ForOf Loop********************
// we cant update values using this loop because it takes copy of that ele form that array 
for (const ele of a) {
    //console.log(ele);
    
}

// ForEach Loop **************___>>>>
// we cant update values using this loop because it takes copy of that ele form that array 

a.forEach((ele , i) => {
    //console.log(ele,i);
    
});