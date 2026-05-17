//DATES
// Date -> OBJECT

let myDate = new Date()
//console.log(myDate.toString());
// console.log(myDate.toDateString()); // gives only date 
// console.log(myDate.toISOString()); // date in numeric type and time also
// console.log(myDate.toJSON()); // same as upar aali
//console.log(myDate.toLocaleString); // numeric date with time AM PM

// month are starting with index 0 
//let myCreateDate = new Date(2006 , 1 , 13)

//let myCreateDate = new Date(2006 , 1 , 13 , 23 , 45,23)
let myCreateDate = new Date("02-13-2006") // 1->JAN

//console.log(myCreateDate.toDateString());


// TIME STAMP
// always do comparison in milisecond
let myTimeStamp =  Date.now()
//console.log(myTimeStamp); // return milisecond from 1 jan 1970

//console.log(myCreateDate.getTime()); // this also return milisec from 1 jan 1970

// convert mili sec to second

//console.log(Math.floor(myTimeStamp/1000));

let newdate = new Date()
// console.log(newdate.getMonth());// start with 0
// console.log(newdate.getDay()); // return 0->sun ,  1->mon

// u can define as u want
newdate.toLocaleString("default",{
    weekday:"long"
})

// console.log(newdate.toLocaleString("default",{
//     weekday:"long",
//     day:"2-digit",
//     month:"short",
//     year:"numeric"
// }));

console.log(newdate.toLocaleString("default",{
    weekday:"long",
}));










