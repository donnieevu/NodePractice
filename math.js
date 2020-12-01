const add = (x, y) => x + y;
const pi = 3.14159
const square = x => x * x;
// module.exports.add = add
// module.exports.pi = pi
// module.exports.square = square // one way to write it
const math = {
    add: add,
    pi: pi,
    square: square
}

module.exports = math; // another way to write it

// module.exports.add = (x, y) => x + y;
// module.exports.pi = 3.14159
// module.exports.square = x => x * x; //another example way to write it