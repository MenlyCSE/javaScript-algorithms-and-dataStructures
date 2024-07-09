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

  // I used the OR operator in this regex... 
  // this gave me a good visual while buildign: https://ihateregex.io/expr/phone/
  const regex = /^(1)?(([ ]?[-]?[(][\d]{3}[)][-]?[ ]?)|([ ]?[-]?[\d]{3}[-]?[ ]?))[\d]{3}[-]?[ ]?[\d]{4}$/

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