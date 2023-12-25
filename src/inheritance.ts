class Animal {
  hunger: number;
  health: number;
  protected coordX: number;
  protected coordY: number;

  constructor(hunger: number, health: number, coordX: number, coordY: number) {
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

  setCoordX(x: number) {
    this.coordX = x;
  }
  setCoordY(y: number) {
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
  jump(x: number) {
    console.log(x);
  }
}

class Dog extends Animal {
  makeNoise(): void {
    console.log("Bark");
    super.makeNoise();
  }

  place() {
    console.log(`I'm at ${this.coordX}:${this.coordY}`);
  }

  returnToOwner() {
    console.log(
      `I'm at ${this.getCoordX()}:${this.getCoordY()} and now I'm running to owner`
    );
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
