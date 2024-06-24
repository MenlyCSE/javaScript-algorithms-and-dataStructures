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
  // how much $ buyer user has
  const cashValue = parseFloat(cash.value);

  // based on what user gives, provide leftovers
  const leftOverCash = cashValue - price;

  // iterating through cash-in-drawer (cid)
  let totalCashInDrawer = 0;
  cid.forEach((element) => {
    totalCashInDrawer += element[1];
  });

  // note: change cid after subtracting price

  // is there enough in cid to give change?
  if (totalCashInDrawer < leftOverCash) {
    changeDue.innerHTML += "Status: INSUFFICIENT_FUNDS <br/>";
  } else if (totalCashInDrawer > leftOverCash) {
    changeDue.innerHTML += "Status: OPEN <br/>";

    cid.forEach((element) => {
      if (price < element[1]) {
        element[1] -= price;
        return;
      }
    })
    changeDue.innerHTML += `${totalCashInDrawer.toFixed(2)} <br/>`;

  } else if (totalCashInDrawer === leftOverCash) {
    changeDue.innerHTML += "Status: CLOSED <br/>";
  }

  // edge cases
  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  };

  if (cashValue === price) {
    changeDue.innerHTML += "No change due - customer paid with exact cash";
    return;
  };
};

// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})