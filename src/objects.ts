class Player {
  name: string;
  health: number;
  isInvisible: boolean;
  crush?: Player | null; // Making crush property optional

  constructor(
    name: string,
    health: number,
    isInvisible: boolean,
    crush: Player | null = null
  ) {
    this.name = name;
    this.health = health;
    this.isInvisible = isInvisible;
    this.crush = crush;
  }

  move() {
    console.log(`${this.name} moving`);
  }
}

const azraa = new Player("Azraa", 10, true);
const mrx = new Player("Sures", 10, false, azraa);

console.log(mrx.crush?.name);
