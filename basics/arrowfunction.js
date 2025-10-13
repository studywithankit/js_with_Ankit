//   ArrowFunction Practice

const user = {
  username: "Ankit",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Ankit";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Ankit";
//   // console.log(this.username);
// };
// chai();

// Arrow Function Syntex

const chai = () => {
  let username = "Ankit";
  console.log(this.username);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };   //if we use curly braket then have to write return keyword (implicit return : when we use return keyword)

// const addTwo = (num1, num2) => num1 + num2; //(ecplicit return: when we do not use return keyword)

// const addTwo = (num1, num2) => num1 + num2; //explicit return:

// const addTwo = (num1, num2) => ({
//   username = "Ankit",
// }) //explicit return:

// console.log(addTwo(6, 7));

const myArray = [2, 3, 4, 5, 4];

myArray.forEach();
