const coding = ["CPP","c","JAVA","JS","RUBY"]


coding.forEach( function (item){// this is a call back function so no name
    //console.log(item);
    
})

coding.forEach((item)=>{
    //console.log(item);
    
})

function printMe(value){
    console.log(value);
    
}

//coding.forEach(printMe)

coding.forEach((ele,index,arr)=>{
    //console.log(ele,index,arr);
    
})

const myArr = [
    {
        name : "DIPANK",
        age:20,
    
    },

    {
        lang1:"C++",
        lang2:"PYTHON",
    }


]

myArr.forEach((item)=>{
    console.log(item.lang1);
    
})