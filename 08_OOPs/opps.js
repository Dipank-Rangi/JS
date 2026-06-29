// const user ={
//     username : 'Dipank',
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails:function(){
//        // console.log('Got user details from Database');
//         console.log(this.username);
        
//     }
// }

//console.log(user.signedIn);
//console.log(user.getUserDetails());




function user (username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //return this;-> not necessary to return this 
    // we can declare a function also here

}

let user1 = new user('dipank',1,true)
let user2 = new user('ashu',12,false)//overWrite all user1 values if we use new then it will not overWrite

// new -> click kiya toh ek empty object create hoota hai jisko instance boola jaata hai -> construuctor function call hoota hai -> this keyword main sari values add kr di jaaati hai
 console.log(user1.isLoggedIn);

