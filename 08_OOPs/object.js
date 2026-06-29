function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 66776

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const deep = new createUser('Deep',89);
const ashu = new createUser('Ashu',23);

deep.printMe();

