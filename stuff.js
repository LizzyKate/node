let counter = (arr) => {
	return "There are " + arr.length + " elements in this array";
};

let adder = (a, b) => {
	return `The sum of the 2 numbers is ${a + b}`;
};

let pi = 3.142;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi,
};
