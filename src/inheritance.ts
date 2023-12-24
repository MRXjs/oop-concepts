class Animal {
  hunger: number;
  health: number;
  protected coordX: number;
  protected coordY: number;

  setX(x: number) {
    this.coordX = x;
  }
  setY(y: number) {
    this.coordY = y;
  }

  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("sleeping");
  }
  move() {
    console.log(`moving`);
  }
  makeNoise() {
    console.log("aaaa");
  }
}

class Dog extends Animal {
  owner: string;

  makeNoise() {
    console.log("bark bark bark....");
    super.makeNoise();
  }
  returnToOwner() {
    console.log(
      `I am at X${this.coordX} Y${this.coordY}, Return to ${this.owner}`
    );
  }
}
class Cat extends Animal {}

const dog = new Dog();
dog.makeNoise();
dog.setX(24);
dog.setY(32);
dog.owner = "Suresh";
dog.returnToOwner();
