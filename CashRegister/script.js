let price = 19.5;
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

const cash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const validator = () => {
  const customerCash = parseFloat(cash.value);
  let customerChange = (cash.value - price);
  console.log(`Customer's change: ${customerChange}`); // show before results

  // acknowledge the increments
  for (let i = cid.length - 1; i >= 0; i+0) {
    if (unit[i][1] <= customerChange && customerChange > 0 && cid[i][1] > 0) { 
      cid[i][1] -= unit[i][1]; // update cid
      customerChange -= unit[i][1] // update customer change
      console.log(`cycle ${i}: -${unit[i][1]} from ${cid[i][0]}`) // results
    } else if (customerChange < 0.01 && customerChange > 0 && cid[i][1] > 0) {
      cid[i][1] -= unit[i][1]; // update cid
      customerChange = 0;
      console.log(`cycle ${i}: -${unit[i][1]} from ${cid[i][0]}`) // results
    } else {
      i--;
    }
    
    // edge cases
    if (customerCash < price) {
      alert("Customer does not have enough money to purchase the item");
      return;
    } else if (customerCash === price) {
      changeDue.innerHTML += "No change due - customer paid with exact cash";
      return;
    }
  }

  // show cid
  console.log(cid);
}


// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})