// initializing some values
let totalAttempts = 5;  //highest 5 bar attempt korte parbe
let attempts = 0;   //attempts count korteche 0 theke start hocce arki
let totalWons = 0;
let totallosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");  //attempt koi bar remainning aache oi ta dekar jonno

form.addEventListener("submit", function (event) {  //jehoto event ni e kaj korsi nicher line tai event ta pass ko re di te hobe
  event.preventDefault();  //amra cacchi nah je bar bar refresh hok

  attempts++;
  if (attempts === 5) {  //attempt count ta jodi 5 er soman hoi taile field ta ar kaj korbe nah
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);  //guesssing num ta ke num e convert kortechi
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";  //ekta value toh every time dibo
});


function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);   //5 er modde nibe
  if (guessingNumber === randomNumber) {
    resultText.innerHTML = `you have won`;
    totalWons++;
  } else {
    resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
    totallosts++;
  }
  lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
  lostWonMessage.classList.add("large-text");
  cardBody.appendChild(lostWonMessage);
}

//random number generate
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
