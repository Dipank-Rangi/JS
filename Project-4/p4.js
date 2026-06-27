let randomNumber = (parseInt(Math.random()*100+1));

const submit  = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let noGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

// check that the input is valid or not acc to game rules
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid Number.");
    }else if(guess<1 || guess>100){
         alert("Please Enter a Number between 1 to 100 .");
    }else{
        prevGuess.push(guess);
        if(noGuess === 11){
            dispalyGuess(guess);
            displayMsg(`Game Over. Random Number was ${randomNumber} `);
            endGame();
        }else{
            dispalyGuess(guess);
            checkGuess(guess);
        }
       
    }
}

// check that the guess value is correct or smaller than ans or greter than ans
function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You guesses is right .`);
        endGame();
    }else if(guess < randomNumber){
          displayMsg(`Please Guess a higher number.`);
    }else if (guess > randomNumber){
          displayMsg(`Please Guess a smaller number.`);

    }
}




// manipulation with DOM
function displayMsg(msg){
    lowOrHi.innerHTML = ` <h2> ${msg} </h2> `
}



// update the variables
function dispalyGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML +=`${guess} ,  `
    noGuess++;
    lastResult.innerHTML = `${11 - noGuess}`;
}



function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button')
    p.innerHTML = `<button id="newGame"> Start New Game</button>`
    startOver.appendChild(p);
    playGame = false
  
    newGame()
}


function newGame(){
   const  newGameBtn=  document.querySelector('#newGame');
   newGameBtn.addEventListener('click' , function(e){
    randomNumber = (parseInt(Math.random()*100+1));
    prevGuess = []
    noGuess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 - noGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
     playGame = true;
   })
}


