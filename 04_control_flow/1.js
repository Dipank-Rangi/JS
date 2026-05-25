// if 

// if("2"!==2){
//     console.log("HELLO");
    
// }else{
//     console.log("deep");

// }


const score = 200

if(score>100){
    const power = "fly"// this power is only available in this if condition means iska scope is if condition tk hi h 
    //console.log(`User Power : ${power}`);
    

}

const bal = 567
//if(bal >=1000) console.log("hello");

// if(bal < 500){
//     console.log("less than 500");
    
// }else if(bal <750){
//     console.log("less than 750");

// }else if(bal<900){
//     console.log("less than 900");

// }else{
//     console.log("grater  than 900");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if(userLoggedIn && debitCard){
//     console.log("Allowed to buy course");
    
// }

if(userLoggedIn && (loggedInFromEmail || loggedInFromGoogle)){
      console.log("Allowed to 2 buy course");

}