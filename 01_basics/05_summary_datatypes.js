// data ko kis trh memory main rakha jata hai or access kra jata hai us hisab se datat ko baata gya hai 2 typs hai
// Primitive -> call by value 

// 7 types : String , Number ,Boolean , null , undefined , Symbol , BigInt

// Refernce (Non primitive) -> call by reference 

// Array , object , functions
// typeof return object for array and object && gives function for function 
// js -> dynamically typed language becoz we dont have to declare the type of variable lke in c or c++

// Symbol 

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // ->false because the use of Symbol is to make them different


// use (n) to convert the number in big int 

// Array 

const heros = ["deep" , " DIPANK"]

// objects

let myObj = {
    name:"DIPANK",
    age : 20,
}

// function 

const myFun = function(){
    console.log("HELLO WORLD");
    
}

console.log(typeof id);
