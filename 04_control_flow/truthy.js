//falsy values = false , 0,-0,BigInt 0n , null , undefiend , Nan,""
// else all are truthy -> "0","false",[],{},function(){}
const userEmail = []

// if u want to check arr
if(userEmail){
      //console.log("GOT UR EMAIL");
}else{
    //console.log("Didn't get ur email");
    
}

// if u want to check objects

const emptyObj = {
    username : "DIPANK"
};
// Object.keys()-> ye ek array return krta hai jo objects ki sari keys ko ek array main daal deti hai
if(Object.keys(emptyObj).length===0){
    //console.log("EMPTY OBJEcT");
    
}else{
    //console.log("NOT A EMPTY OBJECT");
    
}

// if(userEmail){
//     console.log("GOT UR EMAIL");
    
// }else{
//     console.log("Didn't get ur email");
    
// }

//Nullish Coalescing Operator (??) : -> null undefined

let val1;
val1 = 5 ?? 10 // -> 5
val1 = null ?? 10 //->10
val1 = undefined ?? 12//-> 12
val1 = undefined ?? 0 ?? 13 // -> first value without null and undefined
val1 = null ?? undefined//->undefined
val1 = undefined ?? null//->null
//console.log(val1);

// Terniary Operator

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");


