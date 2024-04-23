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

  const romans = {
    1000:'M',
    900:'CM',
    500:'D',
    400:'CD',
    100:'C',
    90:'XC',
    50:'L',
    40:'XL',
    10:'X',
    9:'IX',
    5:'V',
    4:'IV',
    1:'I'
  }

  if (userInput.value.includes(romans.value)) {
    output.innerHTML = romans.numeral;
  }


  convertBtn.addEventListener('click', inputChecker)
  userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      inputChecker();
    }
  })
}