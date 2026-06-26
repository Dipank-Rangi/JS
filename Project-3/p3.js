const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
    clock.innerText = (date.toLocaleTimeString());
    clock.style.color = 'white'
} , 1000);



// clock.appendChild(date.toLocaleTimeString())