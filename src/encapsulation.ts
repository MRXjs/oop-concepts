class Player {
  private health: number;
  private speed: number;

  setHealth(health: number) {
    this.health = health;
  }
  getHealth() {
    return this.health;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }
  getSpeed() {
    return this.speed;
  }
}

const mrx = new Player();

mrx.setHealth(10);
console.log(mrx.getHealth());
