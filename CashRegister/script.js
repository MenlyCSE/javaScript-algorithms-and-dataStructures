let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0], 
  ["DIME", 0], 
  ["QUARTER", 0], 
  ["ONE", 0], 
  ["FIVE", 0], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
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
  if (customerCash < price) {
    changeDue.innerHTML = `STATUS: ${status[2]}`; // Not enough money from customer
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (total < customerChange) {
    changeDue.innerHTML = `STATUS: ${status[2]}`; // Not enough money in drawer
    return;
  } else if (customerChange === 0) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    return;
  } else {
    changeDue.innerHTML = `STATUS: ${status[0]}`; // Customer needs some change
  }

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
    let totalInDrawer = 0;
    for (let i = cid.length - 1; i >= 0; i--) {
      totalInDrawer += cid[i][1];
    };

    if (totalInDrawer <= 0) {
      changeDue.innerHTML = `STATUS: ${status[1]}`;
    } else {
      changeDue.innerHTML = `STATUS: ${status[0]}`;
    };

    for (let i = allocation.length - 1; i >= 0; i--) {
      if (allocation[i][1] > 0) {
        changeDue.innerHTML += `<br>${allocation[i][0]}: $${allocation[i][1]}`;
      };
    };
  } else {
    changeDue.innerHTML = `STATUS: ${status[2]}`; // Remaining change not possible
  };
  resetInterface();
};


// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})