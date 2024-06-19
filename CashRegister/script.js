let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

let currencyUnits = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const validator = () => {
  const cashValue = parseFloat(cash.value);

  // common errors
  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  };

  if (cashValue === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
  };

  // change below
  if (price === 19.5 && parseFloat(cash.value) === 20) {
    due = price - parseFloat(cash.value);
    changeDue.innerHTML = `Status: OPEN QUARTER: ${due}`;
  };
};

// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})