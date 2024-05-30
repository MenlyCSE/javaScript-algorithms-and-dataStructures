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
  const regex = /([1])?[0-9\)\(\s]/g;

  const regexRes = regex.test(userInput.value);

  if (!userInput.value) {
    return alert('Please provide a phone number')
  }

  if (regexRes === true) {
    resultsDiv.value = `Valid US number: ${userInput.value}`;
    console.log(resultsDiv.value)
  } else {
    console.log('No...', regexRes)
  }
}


// check
checkBtn.addEventListener('click', checkBtnChecker)

// clear
clearBtn.addEventListener('click', clearBtnChecker)