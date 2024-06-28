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


// update: the goal is to take everything from one category
// e.g., customer gives 100 for a $5 item...

// assuming the cid looks like this: 
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// the change will be: [$60 from "TWENTY"], [$20 from "TWENTY"], [$15 from "TWENTY"]
// and the output would only show subtracts from these three categories


const validator = () => {
  const customerCash = parseFloat(cash.value);

  // edge cases
  if (customerCash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (customerCash === price) {
    changeDue.innerHTML += "No change due - customer paid with exact cash";
  }

  // I want to take what the customer gave me... ^
  // go through my register... ^ 
  // and take away the price of the item
  // ...from what the customer gave me

  let i = 0;
  while (cid[i][i] > price) {
    while (cid[i][i] < price && i < cid.length) {
      i++;
    }

    const update = cid[i][i] - price;
    const updateVal = update.toFixed(2);
    cid[i][i] = updateVal;
    console.log(`SUBTRACTED ${price} from ${cid[i][i - 1]}`)
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