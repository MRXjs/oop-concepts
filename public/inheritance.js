"use strict";
class Animal {
    constructor(hunger, health, coordX, coordY) {
        this.hunger = hunger;
        this.health = health;
        this.coordX = coordX;
        this.coordY = coordY;
    }
    getCoordX() {
        return this.coordX;
    }
    getCoordY() {
        return this.coordY;
    }
    setCoordX(x) {
        this.coordX = x;
    }
    setCoordY(y) {
        this.coordY = y;
    }
    eat() {
        console.log("Im eating");
    }
    sleep() {
        console.log("Im sleeping");
    }
    move() {
        console.log("Im moving");
    }
    makeNoise() {
        console.log("make noise");
    }
    jump(x) {
        console.log(x);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Bark");
        super.makeNoise();
    }
    place() {
        console.log(`I'm at ${this.coordX}:${this.coordY}`);
    }
    returnToOwner() {
        console.log(`I'm at ${this.getCoordX()}:${this.getCoordY()} and now I'm running to owner`);
    }
}
class Canine extends Dog {
    talk() {
        console.log("I'm canine");
    }
}
const overDog = new Canine(7, 10, 75, 63);
overDog.place();
overDog.returnToOwner();
