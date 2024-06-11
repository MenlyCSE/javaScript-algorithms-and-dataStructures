const cash = document.getElementById('cash');
const changeDue = document.getElementById('changeDue');
const purchaseBtn = document.getElementById('purchase-btn');

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

const validator = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  };

  if (cash.value == price) {
    console.log(changeDue.value)
  }
};

purchaseBtn.addEventListener('click', validator);