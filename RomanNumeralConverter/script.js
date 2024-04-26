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
}

const convertToRoman = (num) => {

   // keys
  const romanLookUp = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }

  // accumalator
  let accumalator = '';

  // loop through keys
  for (const key in romanLookUp) {
    const numberValue = romanLookUp[key]
    
    while (numberValue <= num) {
      num -= numberValue;
      accumalator += key;
    }
  }

  // produce values
  return accumalator;
}

convertToRoman();

convertBtn.addEventListener('click', inputChecker)
userInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    inputChecker();
  }
})