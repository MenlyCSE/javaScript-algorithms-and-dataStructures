const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// regex
const regex = /[1]?([0-9][0-9][0-9])([0-9][0-9][0-9])([0-9][0-9][0-9][0-9])/ig

// checkBtn validations
const checkBtnChecker = () => {
  if (!checkBtn.value) {

    // testing
    resultsDiv.value = 'test';
    console.log(resultsDiv)

    return alert('Please provide a phone number')
  }
}

// clearBtn validations
const clearBtnChecker = () => {
  resultsDiv.value = '';
  console.log(resultsDiv);
}

// check
checkBtn.addEventListener('click', checkBtnChecker)

// clear
clearBtn.addEventListener('click', clearBtnChecker)