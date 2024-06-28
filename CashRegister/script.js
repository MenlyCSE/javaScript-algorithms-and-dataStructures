let price = 90.27;
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
const customerCash = parseFloat(cash.value);

const validator = () => {

  // loop through cid
  for (let i = 0; i < cid.length; i++) {
    if (cid[i][1] > price && price > 0) {
      let updateCid = cid[i][1] - price;
      cid[i][1] = updateCid.toFixed(2);
      console.log(`SUBTRACTED ${price.toFixed(2)} from ${cid[i][0]}`)
      price -= cid[i][1] // updates price
    }
    
    // what if the price is something like 150? 
    // I need a way to take portions of each value
    // I am going to find out...
    // I already did a good job making this loop :)

    // edge cases
    if (customerCash < price) {
      alert("Customer does not have enough money to purchase the item");
      return;
    } else if (customerCash === price) {
      changeDue.innerHTML += "No change due - customer paid with exact cash";
      return;
    }
  }

  // test
  console.log(cid);
}


// calls validator
purchaseBtn.addEventListener('click', validator);
cash.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  };
})