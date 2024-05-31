const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');


// clearBtn validations
const clearBtnChecker = () => {
  resultsDiv.innerHTML = '';
}


// checkBtn validations
const checkBtnChecker = () => {
  const regex = /[\d]{0,2}?[\d]{10,10}/g;

  const regexRes = regex.test(userInput.value);

  if (!userInput.value) {
    return alert('Please provide a phone number')
  }

  if (regexRes === true) {
    resultsDiv.innerHTML = `Valid US number: ${userInput.value}`;
    console.log(resultsDiv.innerHTML)
  } else if (regexRes === false) {
    resultsDiv.innerHTML = `Invalid US number: ${userInput.value}`;
    console.log(resultsDiv.innerHTML)
  }
}


// check
checkBtn.addEventListener('click', checkBtnChecker)

// clear
clearBtn.addEventListener('click', clearBtnChecker)