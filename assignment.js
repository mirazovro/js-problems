//raidans to degree(problem1)

function radianToDegree(raidan) {
  return (raidan * 180) / Math.PI;
}

console.log(radianToDegree(10).toFixed(2));
console.log(radianToDegree(25).toFixed(2));
console.log(radianToDegree(199).toFixed(2));

// is javascript file(problem2)
// using declare a function

function isJavaScriptFile(str) {
  if (str.match(/(\w*)\.js$/) == null) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

isJavaScriptFile("app.js");
isJavaScriptFile("js.png");
isJavaScriptFile("image.js.png");
isJavaScriptFile("image.jpg.js");

// is javascript file(problem2)
// using declare a variable

// let fileName = "app.js";
// let fileName1 = "js.png";
// let fileName2 = "image.js.png";
// let fileName3 = "image.jpg.js";

// console.log(fileName.includes(".js"));
// console.log(fileName1.includes(".js"));
// console.log(fileName2.endsWith(".js"));
// console.log(fileName3.includes(".js"));

//calculate the totall price that i have to pay(problem 3)

//disel----> 114
//petrol----> 130
//octane----> 135

//firstcase

const oilCart = [
  { name: "disel", price: 114 },
  { name: "petrol", price: 130 },
  { name: "octane", price: 135 },
];

function oilPrice(price) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    const cost = price[i];
    // console.log(price);
    sum = sum + cost.price;
  }
  return sum;
}
const expense = oilPrice(oilCart);
console.log(expense);

//seconde case

const oilCart2 = [
  { name: "disel", price: 114 * 30 },
  { name: "petrol", price: 130 * 20 },
  { name: "octane", price: 135 * 10 },
];

function oilPrice(price) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    const cost = price[i];
    // console.log(price);
    sum = sum + cost.price;
  }
  return sum;
}
const expense2 = oilPrice(oilCart2);
console.log(expense2);

//third case

const oilCart3 = [
  { name: "disel", price: 114 * 1 },
  { name: "petrol", price: 130 * 0 },
  { name: "octane", price: 135 * 2 },
];

function oilPrice(price) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    const cost = price[i];
    // console.log(price);
    sum = sum + cost.price;
  }
  return sum;
}
const expense3 = oilPrice(oilCart3);
console.log(expense3);

//fourth case

const oilCart4 = [
  { name: "disel", price: 114 * 0 },
  { name: "petrol", price: 130 * 2 },
  { name: "octane", price: 135 * 3 },
];

function oilPrice(price) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    const cost = price[i];
    // console.log(price);
    sum = sum + cost.price;
  }
  return sum;
}
const expense4 = oilPrice(oilCart4);
console.log(expense4);

//4. PublicBusFare(problem 4)

//case 1:
function publicBusFare(busCapacity) {
  if (busCapacity * 250 == 0) {
    console.log(0);
  }
  return 0;
}
let busCapacity = 50;
console.log(publicBusFare(busCapacity));

//case 2:
let busCapacity1 = 55 - 50;
let busFare = 250;
function PublicBusFare(busCapacity1, busFare) {
  if ((busCapacity1 = 5)) {
    console.log(busCapacity1 * busFare);
  }
  return busCapacity1 * busFare;
}
console.log(busCapacity1 * busFare);

// case 3
let microbus = 11;
let busCapacity2 = 112 - 50 * 2;
let microbusCapacity = busCapacity2;
let publicBusCapacity = microbusCapacity - microbus;
// console.log(publicBusCapacity);
let busFare2 = 250;
function PublicBusFare(publicBusCapacity, busFare2) {
  if ((publicBusCapacity = 5)) {
    console.log(publicBusCapacity * busFare2);
  }
  return publicBusCapacity * busFare2;
}
console.log(publicBusCapacity * busFare2);

// case 4
let microbus2 = 11;
let busCapacity3 = 235 - 50 * 4;
let microbusCapacity1 = busCapacity3;
// console.log(microbusCapacity1);
let publicBusCapacity1 = microbusCapacity1 - microbus2 * 3;
// console.log(publicBusCapacity1);
let busFare3 = 250;
function PublicBusFare(publicBusCapacity1, busFare3) {
  if ((publicBusCapacity1 = 5)) {
    console.log(publicBusCapacity1 * busFare3);
  }
  return publicBusCapacity1 * busFare3;
}
console.log(publicBusCapacity1 * busFare3);

// case 5

let microbus3 = 11;
let busCapacity4 = 365 - 50 * 7;
let microbusCapacity2 = busCapacity4;
// console.log(microbusCapacity2);
let publicBusCapacity2 = microbusCapacity2 - microbus3;
// console.log(publicBusCapacity2);
let busFare4 = 250;
function PublicBusFare(publicBusCapacity2, busFare4) {
  if ((publicBusCapacity2 = 5)) {
    console.log(publicBusCapacity2 * busFare4);
  }
  return publicBusCapacity2 * busFare4;
}
console.log(publicBusCapacity2 * busFare4);

// isBestFriend(problem 5)
//case-1:

function isBestFriend(bestFriend, bestFriend1) {
  if (bestFriend.name == bestFriend1.friend) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

const bestFriend = { name: "abul", friend: "babul" };
const bestFriend1 = { name: "babul", friend: "abul" };
isBestFriend(bestFriend, bestFriend1);

// case 2:

function isBestFriend(bestFriend2, bestFriend3) {
  if (bestFriend2.name == bestFriend3.friend) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

const bestFriend2 = { name: "abul", friend: "kabul" };
const bestFriend3 = { name: "kabul", friend: "sabul" };
isBestFriend(bestFriend2, bestFriend3);

// case 3:
function isBestFriend(bestFriend4, bestFriend5) {
  if (
    bestFriend4.name == bestFriend5.friend &&
    bestFriend4.friend == bestFriend5.name
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

const bestFriend4 = { name: "doe", friend: "alex" };
const bestFriend5 = { name: "john", friend: "doe" };
isBestFriend(bestFriend4, bestFriend5);
