const coding = ["C++","C","PY","JAVA","JS"]

// coding.forEach((item)=>{
//     // console.log(item);
    
// })

const num = [1,2,3,4,5,6,7,8,9]

const myNum = num.filter((num)=>{
        if(num > 5) return num;
})
// console.log(myNum);


const arr = [1,2,3,4,5,6,7,8,9]

const newNums = arr.map((num)=> num*10).map((num)=>num+1).filter((num)=> num > 40)
console.log(newNums);

 