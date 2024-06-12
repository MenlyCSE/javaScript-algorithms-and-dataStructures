const cash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

let price = 1.87;
let leftover = price 

// cash in drawer
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

console.log(cid[0][1])

const validator = () => {
  if (parseFloat(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
  };

  if (parseFloat(cash.value) === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
  }
};

// calls validator
purchaseBtn.addEventListener('click', validator);