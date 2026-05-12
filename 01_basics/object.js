// object is kind of like map where we have key-value pair

// we can put spaces between the name of key but use it as a string means put it in double colon
let x = {
    name : "DIPANK",
    age : 20,
    percentage : 92,

}
console.log(x.name); // this is also coorrect

//console.log(x['name']); //we can use this also

// do changes like this
x.name = "DEEP" 
console.log(x);

// for in is same as of forof just use in instead of of 
for (const key in x) {
    
    console.log(key , x[key]); // we can approach value by x[key] not x.key
    
   
    
    
}




