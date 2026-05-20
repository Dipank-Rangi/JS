// global scope
let a = 200
if("dip"){
    //block scope
     a = 10
    const b = 20
    var c = 30

}
//console.log(a);

// var ko kahi bhi declare kro vo hr jgh accessible hai 

let x =[1,2,3]
if(true){
    x.push(4)
}
//console.log(x);

function one(){
    const username="DIPANK"

    function two(){
        const website = "YOUTUBE"
        console.log(username);
        
    }
    two();
    //console.log(website)
}

//one();

if(true){
    const username = "DIPANK"
    if(username === "DIPANK"){
        const website = " YOUTUBE"
        //console.log(username + website);
        
    }
    //console.log(website); //->error
    
}
//console.log(username);//-> error


// ********* interseting *************

console.log(addone(2));// not give error

function addone(val){
    return val+1;
}

console.log(addtwo(4));// gives error ->hoisting

const addtwo = function(num){
    return num+2;
}

