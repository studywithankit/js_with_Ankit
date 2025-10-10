// More in functions

function calculteCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculteCartPrice(200, 400, 700, 600, 6778, 567));

const user = {
  username: "Ankit",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price} `
  );
}

// handleObject(user);
// handleObject({ username: "Alok", price: 788 });

const myNewArray = [200, 300, 400, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 400, 599, 687]));
