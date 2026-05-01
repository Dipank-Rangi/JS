const accountId = 131706 //fixed 
let accountEmail = "dipank12@gmail.com"
var accountPassword = "12345" // never use var because of issue in block scope and functional scope 
accountCity = "Bhiwani" // its not good but we can also declare variables like this also
let accountState;
//accountId=2 // not allowed 
accountEmail = "dipankboy1@gmail.com"
accountPassword="12121"
accountCity="Dadri"
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
