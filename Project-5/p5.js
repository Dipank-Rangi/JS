// genrate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ; i<6;i++){

    color+=hex[Math.floor(Math.random()*16)];
        
    }

    return color;
}

let strtInterval ;
let strtChangingColor = function(){
     


    let changeBgColor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!strtInterval){
    strtInterval =  setInterval(changeBgColor , 2000);

    }
     

}

let stopChangingColor = function(){
    clearInterval(strtInterval);
    strtInterval = null;
}


document.querySelector('#start').addEventListener('click',strtChangingColor)


document.querySelector('#stop').addEventListener('click',stopChangingColor)
