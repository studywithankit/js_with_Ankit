const userEmail = [];

if (userEmail) {
  // console.log("Got user Email");
} else {
  // console.log("Don't have user email.");
}

// falsy Valuses (false, 0, -0, Bigint 0n, "", null, undefined, NaN,)

// Truty Valuses ("0", "False", '', [], {}, function(){}, )

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  console.log("Object is empty");
}
