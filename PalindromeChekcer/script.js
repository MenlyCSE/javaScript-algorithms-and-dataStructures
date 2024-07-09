const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkText = () => {
  const regex = /[\s-_\.,:)\(\]\[\/\\|{}!@#$%^&*+"'<>?`~]/g
  const regText = textInput.value.replace(regex, "").toLowerCase();
  const revText = textInput.value.split("").reverse().join("").replace(regex, "").toLowerCase();

  if (textInput.value.length === 0) {
    return alert("Please input a value");
  } else if (regText === revText) {
    return result.innerHTML = `<span><b>${textInput.value}</b> is a palindrome!<span/>`;
  } else {
    return result.innerHTML = `<span><b>${textInput.value}</b> is not a palindrome!<span/>`;
  }
};

// listener
checkButton.addEventListener("click", checkText);