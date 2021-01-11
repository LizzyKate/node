console.log("hey ninjas");
setTimeout(function () {
	console.log("3 seconds have passed");
}, 3000);

let time = 0;
let timer = setInterval(() => {
	time += 2;
	console.log(time + " seconds have passed");
	if (time > 5) {
		clearInterval(timer);
	}
}, 2000);
console.log(__dirname);

function callFunction(fun) {
	fun();
}

let sayBye = () => {
	console.log("bye");
};

callFunction(sayBye);

// let stuff = require("./stuff");

// console.log(stuff.counter(["shaun", "crystal", "ryu"]));

// console.log(stuff.adder(5, 6));

// console.log(stuff.adder(stuff.pi, 5));

let events = require("events");
let myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", function (message) {
	console.log(message);
});

myEmitter.emit("someEvent", "The event was emitted");

let utils = require("util");

let Person = function (name) {
	this.name = name;
};

utils.inherits(Person, events.EventEmitter);

let james = new Person("james");
let mary = new Person("mary");
let ryu = new Person("ryu");

let people = [james, mary, ryu];
people.forEach(function (person) {
	person.on("speak", function (mssg) {
		console.log(person.name + " said: " + mssg);
	});
});

james.emit("speak", "hey dudes");

let fs = require("fs");
// fs.readFile("readMe.txt", "utf8", function (err, data) {
// 	fs.writeFile("writeMe.txt", data, function (err, result) {
// 		if (err) {
// 			console.log("error", err);
// 		}
// 	});
// });
// fs.unlink("writeMe.txt", (err) => {
// 	// if (err) throw err;
// 	console.log("writeMe.txt was deleted");
// });
// fs.mkdirSync("stuff");
// fs.mkdir("stuff", function () {
// 	fs.readFile("readMe.txt", "utf8", function (err, data) {
// 		fs.writeFile("./stuff/writeMe.txt", data, function (err, result) {
// 			if (err) {
// 				console.log("rror", err);
// 			}
// 		});
// 	});
// });
fs.unlink("./stuff/writeMe.txt", () => {
	fs.rmdir("stuff", function (err, result) {
		if (err) {
			console.log("error", err);
		}
	});
});
