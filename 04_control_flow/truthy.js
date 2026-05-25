//falsy values = false , 0,-0,BigInt 0n , null , undefiend , Nan,""
// else all are truthy -> "0","false",[],{},function(){}
const userEmail = [2]

// if u want to check arr
if(userEmail.length !== 0){
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
    console.log("EMPTY OBJEcT");
    
}else{
    console.log("NOT A EMPTY OBJECT");
    
}

// if(userEmail){
//     console.log("GOT UR EMAIL");
    
// }else{
//     console.log("Didn't get ur email");
    
// }

//Nullish Coalescing Operator (??) : null undefined

