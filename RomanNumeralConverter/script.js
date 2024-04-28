const convertBtn = document.getElementById('convert-btn');
const userInput = document.getElementById('number');
const output = document.getElementById('output')


const inputChecker = (num) => {

  // accumalator
  let accumalator = "";

  // userInput
  num = userInput.value;

  // error checkers
  if (userInput.value === "") {
    output.innerHTML = "Please enter a valid number";
  } else if (userInput.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  }

  // roman dictionary
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

  // loops through dictionary, storing the roman letters
  for (const key in romanLookUp) {

    // stores the values assigned to each roman letter
    const numValue = romanLookUp[key]

    // checks for romans with assigned values that are less or equal to of the input number

    // e.g., if userInput is 10, then it looks for the roman that is less or equal to 10. In this case, it's X
    while (numValue <= num) {

      // subtracts the value assigned to the roman from the user input. In this cause it's "10" - the result looks like: num = 0;
      num -= numValue;

      // going with previous example, it would store X inside of the accumlator. The result looks like: accumalator = "X";
      accumalator += key;

      // error checker
      if (userInput.value >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
      } else {
      // returns value
      output.innerHTML = accumalator;
      }
    }
  }
}

convertBtn.addEventListener('click', inputChecker)
userInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    inputChecker();
  }
})