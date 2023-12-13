let radius = [3, 5, 8];

function diameter(radius) { return (2 * radius); }
function area(radius) { return (Math.PI * (radius * radius)); }

const Circle = (radius, logic) => {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(Circle(radius, diameter));
console.log(Circle(radius, area));