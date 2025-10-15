// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);
}

//nested loop

for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop value: ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and Inner loop ${i}`);
  }
}

// Table print with the help of loop and nested loop

for (let i = 1; i <= 10; i++) {
  // console.log(`${i} Table`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

//print array with the help of loop

let myArray = ["Ankit", "Himani", "Alok"];
// console.log(`myArray length = ${myArray.length}`);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];

  // console.log(element);
}

// How to stop loop at required place

for (let k = 0; k <= 20; k++) {
  if (k == 5) {
    // console.log(`Detected 5`);
    break;
  }
  // console.log(`Value of k is ${k}`);
}

// How to pass one time

for (let k = 0; k <= 20; k++) {
  if (k == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of k is ${k}`);
}
