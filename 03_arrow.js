let user = {
    username:"DIPANK",
    price:111,

    welcomeMessage : function(){
        console.log(`hii ${this.username} , you are welcome!`);
        // this isi context ki chijo ko refer krta hain 
        console.log(this);// here this is refering to object so it will print whole objet
        
    }
    

}

// user.welcomeMessage()
// user.username = "DEEP"
// user.welcomeMessage()

//console.log(this);// here it is empty 

// browser k ander jb hum js kko use krte hain to global object window object hain


function chai(){
    let username="DIPANK"
    console.log(this.username);// this is work only in object not in functions
    

}
//chai()

// const one = function(){
//     let username = "DIPANK"


// }

// ARROW FUNCTION
const one = () => {
    let username = "DIP"
    console.log(this);//->{}
    
}
// one()

// -> explicit
// const addtwo = (num1 , num2)=>{
//     return num1 + num2;
// }


// -> implicit
//const addtwo = (num1 , num2)=> num1 + num2; -> this is also correct
 
//const addtwo = (num1 , num2)=> (num1 + num2)

// to return object
const addtwo=(num1,num2)=> ({username:"DIPE"})
console.log(addtwo(2,3));



