const coding = ["C++","C","PY","JAVA","JS"]

const values = coding.forEach((item)=>{
   //console.log(item);
    return item;
    
})

coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
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
//console.log(newarr);

const myCoding = [
    {
        language : 'Js',
        languageFileName :'.js',
    },

    {
        language : 'Pyhton',
        languageFileName :'.py',
    },

    {
        language : 'c++',
        languageFileName :'.cpp',
    },

    {
        language : 'C',
        languageFileName :'.c',
    },
]

myCoding.forEach((item)=>{
    for (const key  in item) {
        console.log(`${key}->${item[key]}`);
    }
})


