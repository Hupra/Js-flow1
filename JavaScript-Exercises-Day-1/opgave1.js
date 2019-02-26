const arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const toUpper = e => e.toUpperCase();
const len3 = e => e.length <= 3;

// 1)
console.log(arr.filter(len3));
console.log(arr.map(toUpper));

// 2)
function myFilter(array, callback) {
	const newArr = [];
	for (e of array) if (callback(e)) newArr.push(e);
	return newArr;
}

function myMap(array, callback) {
	const newArr = [];
	for (e of array) newArr.push(callback(e));
	return newArr;
}

console.log(myFilter(arr, len3));
console.log(myMap(arr, toUpper));

// 3)
Array.prototype.myFilter = function(callback) {
	return myFilter(this, callback);
};

Array.prototype.myMap = function(callback) {
	return myMap(this, callback);
};

console.log(arr.myFilter(len3));
console.log(arr.myMap(toUpper));

// 4)
const toLi = e => `<li>${e}</li>`;

console.log(`<ul>${arr.myMap(toLi).join("")}<ul>`);

// filter, map, reduce)

console.log(arr.join());
console.log(arr.join(" "));
console.log(arr.join("#"));

const nums = [2, 3, 67, 33];
console.log(nums.reduce((a, b) => a + b));

const members = [
	{ name: "Peter", age: 18 },
	{ name: "Jan", age: 35 },
	{ name: "Janne", age: 25 },
	{ name: "Martin", age: 22 }
];
console.log(members.reduce((pre, cur, _, arr) => pre + cur.age / arr.length, 0));

const votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

const counter = (pre, cur) => {
	pre[cur] = pre[cur] ? ++pre[cur] : 1;
	return pre;
};
console.log(votes.reduce(counter, {}));

// Immediately Invoked Function Expressions (rød)

(() => {
	console.log("hej");
})();

(function() {
	console.log("hej");
})();

!(function() {
	console.log("hej");
})();

void (function() {
	console.log("hej");
})();

(para => console.log(para))("hejsa");

// Objects)

const obj = { a: "daniel", b: "benjamin", c: "gitte", d: "lars" };

for (x in obj) console.log(obj[x]);

delete obj.a;

for (x in obj) console.log(obj[x]);

console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("b"));
console.log(obj.a);
console.log(obj.b);

function Book(name, pages, age) {
	this.name = name;
	this.pages = pages;
	this.age = age;
	this.details = `||name: ${name}, pages: ${pages}, age: ${age}||`;
}

const book = new Book("Jungle Bogen", 404, 25);
book;
