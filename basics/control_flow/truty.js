const userEmail = [];

if (userEmail) {
  // console.log("Got user Email");
} else {
  // console.log("Don't have user email.");
}

// falsy Valuses (false, 0, -0, Bigint 0n, "", null, undefined, NaN,)

// Truty Valuses ("0", "False", '', [], {}, function(){}, )

if (userEmail.length === 0) {
  // console.log("Array is empty");
}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 19;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

//console.log(val1);

//terniary Operator(condition ? true : false)

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
