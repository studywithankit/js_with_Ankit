//functions

// function myName() {
//   console.log("A");
//   console.log("N");
//   console.log("K");
//   console.log("I");
//   console.log("T");
// }

// myName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = addTwoNumbers(58, 76);
// console.log("result: ", result);

function addTwoNumbers2(digit1, digit2) {
  // let result = digit1 + digit2;
  // console.log("Ankit Kumar");
  // return result;

  //2nd method for ruduce line
  return digit1 + digit2;
}

const result = addTwoNumbers2(25, 78);
// console.log("result: ", result);

// new Functions type

function loginUserMessage(username = "Ankit") {
  // if (username === undefined) {
  //   console.log("Please enter a username");
  //   return;
  // }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Ankit"));
console.log(loginUserMessage("Alok"));
