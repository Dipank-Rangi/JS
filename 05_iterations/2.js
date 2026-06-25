// for of -> not workk for objects

const arr = [1,2,3,4,5]

for (const ele of arr) {
   // console.log(ele);
    
}

const greetings = "Hello world"

for (const ele of greetings) {
   // console.log(ele);
    
}

// Maps->stroe unique values && maintain the order in insert

const map = new Map()
map.set('IN' , "INDIA")
map.set("PAK","PAKISTAN")
map.set("PAK","PAKISTAN")
//console.log(map);

for (const [key , value] of map) {
    // console.log(key);
    // console.log(value);
    
    
}


const myObj = {
    name : "DIPANK",
    age :20,

}

for (const [key,value] of myObj) {
    console.log(key);
}
