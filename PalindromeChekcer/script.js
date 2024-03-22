const checkButton = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (textInput.value.length === 0) {
    return alert("Please input a value")
  }
});

checkButton.addEventListener("click", () => {
  if (textInput.value.length === 1) {
    console.log(`${textInput.value} is a palindrome`)
  }
});