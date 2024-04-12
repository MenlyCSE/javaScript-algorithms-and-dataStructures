const convertBtn = document.getElementById('convert-btn');
const input = document.getElementById('number');
const output = document.getElementById('output')


const inputError = () => {
  if (input.value === "") {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  }
}
convertBtn.addEventListener('click', inputError)