//scope

// let c = 300;
let a = 304;

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  // var c = 30;
  c = 30;
  // console.log("inner a =", a); //note: always avoid to decalare var inside the scope
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Ankit";

  function two() {
    const website = "YouTube";
    console.log(userName);
  }
  // console.log(website);
  // two();
}

// one();

if (true) {
  const username = "Ankit";
  if (username === "Ankit") {
    const website = "YouTube";
    // console.log(website + website);
  }
  // console.log(website);
}

// console.log(username);

/************ Interesting ********** */

// console.log(addone(5));
function addone(num) {
  return num + 1;
}

// expression
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
