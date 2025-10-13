//immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFF
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Ankit");
