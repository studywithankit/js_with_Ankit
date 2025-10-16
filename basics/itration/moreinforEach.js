const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});

// console.log(values); //it does't return any value i.e it is undefined if I return it

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((item) => {
  return item > 4; //if we use this type of code than it is necessary that we have to return this values. i.e use of return is imp.
});

const thisNums = [];

console.log(newNums);
