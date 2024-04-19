const convertBtn = document.getElementById('convert-btn');
const userInput = document.getElementById('number');
const output = document.getElementById('output')


const inputChecker = () => {
  if (userInput.value === "") {
    output.innerHTML = "Please enter a valid number";
  } else if (userInput.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (userInput.value >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }


  for (const value of userInput.value) {
    if (value === '1') {
      output.innerHTML = "I"
    }
  }

}


convertBtn.addEventListener('click', inputChecker)
userInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    inputChecker();
  }
})