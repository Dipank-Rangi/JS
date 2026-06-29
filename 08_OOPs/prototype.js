// let myName = "dipank"

// console.log(myName.length);


let myHeros = ["thor" , "spiderMan"];

let heroPow = {
    thor :'hammer',
    spiderMan:'sling',

    getSpiderPower:function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.call = function(){
    console.log('I am present everywhere..');
    
}

// myHeros.call()
// heroPow.call()

// Inheritance

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true
}

Object.setPrototypeOf(TeachingSupport,Teacher)