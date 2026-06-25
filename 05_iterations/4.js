const coding = ["C++","C","PY","JAVA","JS"]

const values = coding.forEach((item)=>{
   // console.log(item);
    return item;
    
})

//console.log(values);//->undefined


let arr = [1,2,3,4,5,6,7,8,9,10]

// filter will return the value forEach will not return anything
//let newarr = arr.filter( (num)=> num>5)
// give a condition

// let newarr = arr.filter((num)=>{
//    return num>5 ;
// })

let newarr = []
arr.forEach((item)=>{
    if(item>5){
        newarr.push(item);
    }
})
console.log(newarr);
