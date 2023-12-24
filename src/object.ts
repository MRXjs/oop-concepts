class Player {
  name: string;
  health: number;
  isInvisible: boolean;
  crush: Player;

  great() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const mrx = new Player();
mrx.name = "Suresh";
mrx.health = 10;
mrx.isInvisible = false;

const pixie = new Player();
pixie.name = "Rusiri";
pixie.health = 10;
pixie.isInvisible = true;

mrx.crush = pixie;
mrx.crush.great();
