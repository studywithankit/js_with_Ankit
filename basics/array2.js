const marver_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marver_heros.push(dc_heros)

// console.log(marver_heros);
// console.log(marver_heros[3][1]);


// const allHeros = marver_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marver_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [ 5, 6]]]

let real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({name: "Ankit"}))  //interesting case for interview

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




