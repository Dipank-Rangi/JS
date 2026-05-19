// let user = new Object()// singleton object
let user1={}// not a singleton object

user1.id="123dep"
user1.name="DIPANK"
user1.isLoggedIn=false
//console.log(user1);

let regUser={
    email:"dipank@gmail.com",
    fullname:{
        userFullName:{
            firstName:"DIPANK",
            lastName:"RANGI",
        }
    }
}

//console.log(regUser.fullname.userFullName);

let obj1={1:"abc" , 2:"bcd"}
let obj2={3:"WER" , 4:"DEND"}

// let obj3={obj1 , obj2}; wahi problem object k ander object ho gye har ele alg se nhi aaye gya


//let obj3=Object.assign({},obj1,obj2)// {}-> ye taget hai mtlb saari value isme add ho gyi agr hum ye na dete toh saari values obj1 main jaati 

// ***** phir wahi same funda
let obj3= {...obj1 , ...obj2}
//console.log(obj3);

// aray of objects

let arr=[
    {
        name:"DIPANK",
        email:"DIPANK@GMAIL>COm",
    }
]

// ****************************************
// object ki sari keys chaia 

//console.log(Object.keys(user1));// return type is array
//console.log(Object.values(user1));// array hi return hi kre gya
//console.log(Object.entries(user1));// return array of array of key with its value

console.log(user1.hasOwnProperty("name1"));

// destruct of objects
const course={
    courseName:"JSHindi",
    price:"999",
    courseInstructor:"DIPANK"

}

// it is okay console.log(course.courseName);
// but many people use this new one

const {courseInstructor:instructor}   = course // phli k chaia or = k baad kis main se chaia
console.log(instructor);

// jb hum api ko call krte hain toh hume data ya toh object ke format main milta hain ya to array ke format main