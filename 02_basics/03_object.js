// singleton

// literals -> not singleton 

// constructor-> use singleton -> object.create

// abhi hum literals padhe gya

let mySym = Symbol("MYKEY")
const JsUser={
    name:"DIPANK",
    roll:250107025,
    isLoggedIn:false,
    [mySym]:"NEWKEY" // gr direct declare kiya toh ye as a string declare hoga  ** to declare as a symbol use square bracket
}



// two method to access the object ele
//console.log(JsUser.name);
//console.log(JsUser[mySym]);// to access symbol dont use "" becoz its key  is stored as a symbol not a string

JsUser.name="DEEP"// update values

// u can freeze the object so that no one can update it

//Object.freeze(JsUser)

JsUser.roll=2343234// now value will not be changed becoz u freeze the object
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("HII.. DIPANK");
    
}

JsUser.greeting1 = function(){
    console.log(`HII.. ${JsUser.name}`);// u can use this.name to acess ele of same object
    
}

console.log(JsUser.greeting1());

