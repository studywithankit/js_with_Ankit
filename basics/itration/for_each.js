const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  // console.log(val);
});

coding.forEach((item) => {
  // console.log(item);
});

function printMe(itme) {
  // console.log(itme);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const mycoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "j",
  },
  {
    languageName: "Ruby",
    languageFileName: "rb",
  },
];

mycoding.forEach((item) => {
  console.log(item.languageName);
});
