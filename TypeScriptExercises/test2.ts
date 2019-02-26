let http = require("http");
let msg: string = "hallo";

interface IBook {
	title: string;
	readonly author: string;
	published?: Date;
	pages?: number;
}

const bible = {
	title: "bible",
	author: "god",
	published: new Date(),
	pages: 1337
};

const dagbog = {
	title: "Daniel's dagbog",
	author: "daniel"
};

const fakeBook = {
	bibob: "mango"
};

function testIfBook(book: IBook) {
	console.log(book.title, book.author, "|");
}

testIfBook(bible);
testIfBook(dagbog);

console.log(bible.author, bible.title);

class Book implements IBook {
	published: Date;
	constructor(public title: string, public author: string, public pages: number) {
		this.published = new Date();
	}
	printInfo() {
		return `Book: ${this.title}, written by ${
			this.author
		}, ${this.published.getFullYear()}`;
	}
}

const myBook = new Book("Den sej bog", "daniel", 25);

console.log(myBook.printInfo());

interface myFunc {
	(s1: string, s2: string, s3: string): Array<string>;
}

let toArr: myFunc;
toArr = function(s1: string, s2: string, s3: string): Array<string> {
	return [s1, s2, s3];
};

let toArrUpper: myFunc;
toArrUpper = function(s1: string, s2: string, s3: string): Array<string> {
	return [s1.toLocaleUpperCase(), s2.toLocaleUpperCase(), s3.toLocaleUpperCase()];
};

let f2 = function logger(f1: myFunc) {
	//Simulate that we get data from somewhere and uses the provided function
	let [a, b, c] = ["Daniel", "Benjamin", "Jacob"];
	console.log(f1(a, b, c));
};

f2(toArr);
f2(toArrUpper);

function randomFunc(s1: string, s2: string, s3: string) {
	return [s1, s2, s3];
}
function randomFunc2(s1: string, s2: string, s3: string, s4: string) {
	return [s1, s2, s3, s4];
}

f2(randomFunc);

class Shape {
	constructor(protected color: string) {}
	getArea() {
		return undefined;
	}
	getPerimeter() {
		return undefined;
	}
	getColor() {
		return this.color;
	}
	setColor(color: string) {
		this.color = color;
	}
	toString() {
		return this;
	}
}

const myShape = new Shape("blå");

console.log(myShape.getColor());
myShape.setColor("rød");
console.log(myShape.getColor());
console.log(myShape.toString());

// priavte/public i constructor er noget rod hvis man extender
class Circle extends Shape {
	area: number;
	perimeter: number;
	constructor(protected color: string, protected radius: number) {
		super(color);
		this.area = this.getArea();
		this.perimeter = this.getPerimeter();
	}
	getArea() {
		return this.getRadius() * this.getRadius() * 3.14;
	}
	getPerimeter() {
		return 2 * this.getRadius() * 3.14;
	}

	getRadius() {
		return this.radius;
	}
	setRadius(radius: number) {
		this.radius = radius;
	}
}

const myCircle = new Circle("grøn", 25);

console.log(myCircle);
console.log(myCircle.getColor());
console.log(myCircle.getRadius());
console.log(myCircle.getArea());

// priavte/public i constructor er noget rod hvis man extender
class Cylinder extends Circle {
	volume: number;
	constructor(protected color: string, protected radius: number, protected height) {
		super(color, radius);
		this.volume = this.getVolume();
	}

	getHeight() {
		return this.height;
	}
	setHeight(height: number) {
		this.height = height;
	}
	getVolume() {
		return this.getArea() * this.getHeight();
	}
}

const myCylinder = new Cylinder("blå", 5, 10);

console.log(myCylinder);
console.log(myCylinder.area);
console.log(myCylinder.volume);
console.log(myCylinder.getVolume());

// function printType<c(stuff: any){
//     console.log()
// };
