var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var http = require("http");
var msg = "hallo";
var bible = {
    title: "bible",
    author: "god",
    published: new Date(),
    pages: 1337
};
var dagbog = {
    title: "Daniel's dagbog",
    author: "daniel"
};
var fakeBook = {
    bibob: "mango"
};
function testIfBook(book) {
    console.log(book.title, book.author, "|");
}
testIfBook(bible);
testIfBook(dagbog);
console.log(bible.author, bible.title);
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.published = new Date();
    }
    Book.prototype.printInfo = function () {
        return "Book: " + this.title + ", written by " + this.author + ", " + this.published.getFullYear();
    };
    return Book;
}());
var myBook = new Book("Den sej bog", "daniel", 25);
console.log(myBook.printInfo());
var toArr;
toArr = function (s1, s2, s3) {
    return [s1, s2, s3];
};
var toArrUpper;
toArrUpper = function (s1, s2, s3) {
    return [s1.toLocaleUpperCase(), s2.toLocaleUpperCase(), s3.toLocaleUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["Daniel", "Benjamin", "Jacob"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(toArr);
f2(toArrUpper);
function randomFunc(s1, s2, s3) {
    return [s1, s2, s3];
}
function randomFunc2(s1, s2, s3, s4) {
    return [s1, s2, s3, s4];
}
f2(randomFunc);
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getArea = function () {
        return undefined;
    };
    Shape.prototype.getPerimeter = function () {
        return undefined;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.toString = function () {
        return this;
    };
    return Shape;
}());
var myShape = new Shape("blå");
console.log(myShape.getColor());
myShape.setColor("rød");
console.log(myShape.getColor());
console.log(myShape.toString());
// priavte/public i constructor er noget rod hvis man extender
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        _this.area = _this.getArea();
        _this.perimeter = _this.getPerimeter();
        return _this;
    }
    Circle.prototype.getArea = function () {
        return this.getRadius() * this.getRadius() * 3.14;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.getRadius() * 3.14;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    return Circle;
}(Shape));
var myCircle = new Circle("grøn", 25);
console.log(myCircle);
console.log(myCircle.getColor());
console.log(myCircle.getRadius());
console.log(myCircle.getArea());
// priavte/public i constructor er noget rod hvis man extender
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, height) {
        var _this = _super.call(this, color, radius) || this;
        _this.color = color;
        _this.radius = radius;
        _this.height = height;
        _this.volume = _this.getVolume();
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Cylinder.prototype.getVolume = function () {
        return this.getArea() * this.getHeight();
    };
    return Cylinder;
}(Circle));
var myCylinder = new Cylinder("blå", 5, 10);
console.log(myCylinder);
console.log(myCylinder.area);
console.log(myCylinder.volume);
console.log(myCylinder.getVolume());
// function printType<c(stuff: any){
//     console.log()
// };
