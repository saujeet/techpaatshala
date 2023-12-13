// template literals

let hours = 11;
let day = "Wednesday";
let month = "December";

let today = `Deadline is at ${hours} AM on ${day}, ${month}`;
console.log(today);

// Spread

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let evenodd = [...odd, ...even];
console.log(evenodd.sort(function (a, b) { return a - b; }));

// arrow functions

let num1 = 5;
let square = num => num * num;
console.log(square(num1));

// destructor

let person = {
    name: 'John',
    age: 34,
}

const { name, age } = person;

// array methods

// Map, filter, reduce

let num2 = 10;
let arr1 = [1, 2, 3, 4]

let addNum = arr1.map(n => n + num2);
console.log(addNum);

let even1 = arr1.filter(n => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
})
console.log(even1);

let arraySum = arr1.reduce((acc, currVal) => acc + currVal);
console.log(arraySum);