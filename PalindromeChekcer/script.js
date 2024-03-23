const checkButton = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (textInput.value.length === 0) {
    return alert("Please input a value")
  }
});

checkButton.addEventListener("click", () => {
  textInput.value === textInput.value.split("").reverse().join("") ? console.log(`${textInput.value} is a palindrome`) : console.log(`${textInput.value} is not a palindrome`);
});