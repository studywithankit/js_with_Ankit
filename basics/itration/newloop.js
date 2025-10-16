//for of (loop) Array spacific loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();

map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
map.set("In", "India"); //it is known as unique values

// console.log(map);

for (const [key, values] of map) {
  console.log(key, ":- ", values);
}
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, values] of myObject) {
//   console.log(key, ":-", values);
// }
