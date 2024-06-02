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
  const regexT = /^(1)?(\s)?(\()?(\d{3})(-)?(\))?(\s)?(\d{3})(-)?(\s)?(\d{4})$/;

  const regex = /^(1)?([\(\)]{2})?\d{4}$/

  // missing input 
  if (!userInput.value) {
    return alert('Please provide a phone number')
  }

  // valid number
  if (regex.test(userInput.value)) {
    resultsDiv.innerHTML = `Valid US number: ${userInput.value}`;

    console.log(resultsDiv.innerHTML);
  } else {
    resultsDiv.innerHTML = `Invalid US number: ${userInput.value}`;

    console.log(resultsDiv.innerHTML)
  }
}


// check
checkBtn.addEventListener('click', checkBtnChecker)

// clear
clearBtn.addEventListener('click', clearBtnChecker)