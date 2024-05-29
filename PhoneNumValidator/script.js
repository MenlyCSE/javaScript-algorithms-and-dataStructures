const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');


// checkBtn validations
const checkBtnChecker = () => {
  const regex = /([1])?([\d\s-)()]+)/g;

  if (!userInput.value) {
    return alert('Please provide a phone number')
  }

  if (userInput) {
    resultsDiv.value = 'Valid US number: 1 555-555-5555';
    console.log(resultsDiv.value);
    console.log(regex.test(userInput.value));
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