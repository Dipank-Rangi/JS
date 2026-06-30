function setUsername(username){
    this.username = username
}

function createUser(username , email,password){
    setUsername.call(this ,username)// reference hold krne k lia

    this.email = email
    this.password = password
   
}

const deep = new createUser('deep','deep@google','212')

console.log(deep);


