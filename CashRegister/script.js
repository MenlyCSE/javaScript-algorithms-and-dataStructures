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
  const customerCash = parseFloat(cash.value);
  let customerChange = cash.value - price;

  // loop through cid from top to bottom
  for (let i = cid.length - 1; i > 0; i--) {
    if (cid[i][1] > customerChange && customerChange > 0) {
      let updateCid = cid[i][1] - customerChange;
      cid[i][1] = updateCid.toFixed(2);
      console.log(`SUBTRACTED ${customerChange.toFixed(2)} from ${cid[i][0]}`)
      customerChange -= cid[i][1] // updates price
    }

    // Now, I can make it match the units

    // edge cases
    if (customerCash < price) {
      alert("Customer does not have enough money to purchase the item");
      return;
    } else if (customerCash === price) {
      changeDue.innerHTML += "No change due - customer paid with exact cash";
      return;
    }

    let dummyPrice = 25;
    let cidCopy = cid;
    let transUnits = (cidCopy[i][1] / currencyUnits[i][1]) - dummyPrice;
    console.log(`${transUnits}`);
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