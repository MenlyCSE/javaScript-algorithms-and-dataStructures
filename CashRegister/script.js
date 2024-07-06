let price = 3.26;
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

let unit = [
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

let allocation = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const cash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const validator = () => {
  const status = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];
  const customerCash = parseFloat(cash.value);
  let customerChange = customerCash - price;
  let total = 0;

  // total cash-in-drawer
  for (let i = cid.length - 1; i >= 0; i--) {
    total += cid[i][1];
  };

  // edge case messages
  if (customerCash > total) {
    changeDue.innerHTML = `<br />STATUS: ${status[2]}`; // not enough money in drawer
  } else if (customerCash < price) {
    changeDue.innerHTML = `<br />STATUS: ${status[1]}`; // customer not have enough money
  } else if (customerCash > price) {
    changeDue.innerHTML = `<br />STATUS: ${status[0]}`; // customer needs some change
  } else if (customerCash === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
  };
  
  if (customerCash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  };

  // remove previous values
  const resetInterface = () => {
    for (let i = allocation.length - 1; i >= 0; i--) {
      allocation[i][1] = 0;
    };
  };

  // acknowledge the increments
  for (let i = cid.length - 1; i >= 0; i--) {
    while (unit[i][1] <= customerChange && customerChange > 0 && cid[i][1] > 0) {
      cid[i][1] -= unit[i][1]; // update cid
      allocation[i][1] += unit[i][1]; // update interface
      customerChange -= unit[i][1] // update customer change
      customerChange = parseFloat(customerChange.toFixed(2)); // round the values
    };
  };

  // display results when everything is accounted for
  if (customerChange === 0) {
    for (let i = allocation.length - 1; i >= 0; i--) {
      if (allocation[i][1] > 0) {
        changeDue.innerHTML += `<br />${allocation[i][0]}: ${allocation[i][1]}`;
      };
    };
    resetInterface();
  };
};


// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})