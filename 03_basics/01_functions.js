let fun = function(){
    console.log("HELLO DIP");
    
}

function myName(){
    console.log("DIPANK IS AN IITian");
    
}

//myName // -> ye funcction ka reference hai

// myName()-> ye function ko call kr rha hai 

// function ko kaise call kre
//fun()
//myName()

function add2Number(a,b){
    return a+b;
}
// jb hum function se kuch return krva rhe hain toh hume console.log ki need hoti hain
//console.log(add2Number(1,2));

// jb humara function kuch return kr rha hai tbhi hum us ko kisi or variable main store kr paaye ggye
let sum = add2Number(2,3);
//console.log(sum);

function loginUserMessage(username = "SAM"){ // agr humne kuch bhi pass nhi kiya toh vo sam use kre gya pass ki toh jo pass ki h usi ko use kre gya

    // if(username === undefined){
    //     console.log("PLEASE ENTER UR NAME !");
    //     return;
        
    // }
    
    if(!username){
        console.log("PLEASE ENTER UR NAME !");
         return;
    }
    return ` Hey ${username} , you are successfully loggen in .`;
}

 //console.log(loginUserMessage("DIPANK"));

// agar hum kuch bhi pass nhi kre gye toh uski jgh undefined likha hua aaye gya na ki null

 console.log(loginUserMessage());



