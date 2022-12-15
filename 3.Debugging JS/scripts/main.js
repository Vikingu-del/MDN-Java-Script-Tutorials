let randomNumber = Math.floor(Math.random()) + 1;
/*
this line always return 1 so we multiply Math.random() with 100
*/

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('lowOrHi');
  //check with console.log(lowOrHi); to see the value of lowOrHi
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

function checkGuess() {
    const userGuess === Number(guessField.value);
    /*shuould be assigned not returning a true or false value
    so it should be const userGuess = Number(guessField.value);
    */
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess = randomNumber) {
    /*
    Always return a win game because because we have assigne it to userGuess
    the value of randomNumber which would be always true so the codition
    should be if (userGuess === randomNumber) {
     */
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
        /*number-game-errors.html:78 Uncaught TypeError: Cannot set properties of null (setting 'textContent')
    at HTMLInputElement.checkGuess (number-game-errors.html:78:29)
        */
       /*should be changed in line 5 adde a dot before low or hi const 
       lowOrHi = document.querySelector('lowOrHi');*/

      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addeventListener('click', checkGuess);
/*Uncaught TypeError: guessSubmit.addeventListener is not a function
    at number-game-errors.html:86:15 
*/
//should be guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addeventListener('click', resetGame);
    //the same errorr as at line 49 should change from resetButton.addeventListener to resetButton.addEventListener
}

function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
	resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()) + 1;
    /*
    this line always return 1 so we multiply Math.random() with 100
    */
}