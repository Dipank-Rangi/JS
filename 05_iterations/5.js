let mynum = [1,2,3,4,5,,6,7,8,9,10]

// by these two loops the value in main arrr didnt change
mynum.forEach((item)=>{
    item+=10;
//     console.log(item);
     })

 mynum.forEach((item)=>{
//     console.log(item);
    
 })

 // use of map in arr
// it will auto maticall retrurn 
const newnum = mynum.map( (num)=> num+10)
 console.log(newnum);
 