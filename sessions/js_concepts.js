// template literals

let hours = 11;
let day = "Wednesday";
let month = "December";

let today = `Deadline is at ${hours} on ${day}, ${month}`;
console.log(today);

// Spread

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let evenodd = [...odd, ...even];
console.log(evenodd.sort(function (a, b) { return a - b; }));