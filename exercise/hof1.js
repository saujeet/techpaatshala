let side1 = [2, 3, 5];
let side2 = [4, 3, 5];

function hypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

const pythagorus = (a, b, logic) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(logic(a[i], b[i]));
    }

    return result;
}

console.log(pythagorus(side1, side2, hypotenuse));