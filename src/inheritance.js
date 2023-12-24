var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setX = function (x) {
        this.coordX = x;
    };
    Animal.prototype.setY = function (y) {
        this.coordY = y;
    };
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    Animal.prototype.sleep = function () {
        console.log("sleeping");
    };
    Animal.prototype.move = function () {
        console.log("moving");
    };
    Animal.prototype.makeNoise = function () {
        console.log("aaaa");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("bark bark bark....");
        _super.prototype.makeNoise.call(this);
    };
    Dog.prototype.returnToOwner = function () {
        console.log("I am at X".concat(this.coordX, " Y").concat(this.coordY, ", Return to ").concat(this.owner));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var dog = new Dog();
dog.makeNoise();
dog.setX(24);
dog.setY(32);
dog.owner = "Suresh";
dog.returnToOwner();
