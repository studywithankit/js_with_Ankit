// if

const isUserloggedIn = true; // (= => assignment operator)

const temperature = 41;

if (temperature < 50) {
  // console.log("less than 50");
} else {
  //console.log("temperature is greater than 50");
}

// if (true) {
// } // (= => assignment operator), (== => cheack equal), (!= => not equal), (=== => cheack equal and also type of the data), (!== => Strict Inequality)

// if (true) {
// }

// if-else general format

const score = 50;
if (score > 100) {
  let power = "Ankit";
  //console.log(`user power: ${power}`);
} else {
  let power = "Alok";
  //console.log(`user power: ${power}`);
}

//if-else shorthand notation

const balance = 1000;
//if (balance > 500) console.log("test"),console.log("test2"); //never type this type of code it is good practice

//nested if-else if
if (balance < 1500) {
  // console.log("less than 1500");
} else if (balance < 500) {
  // console.log("less than 600");
} else if (balance < 500) {
  // console.log("less than 400");
} else {
  // console.log("less than 500");
}

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (userLoggedIn && debitcard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged In");
}
