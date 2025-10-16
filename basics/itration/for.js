const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

const map = new Map(); //map is not itratable

map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
map.set("In", "India");

for (const key in map) {
  console.log(key);
}
