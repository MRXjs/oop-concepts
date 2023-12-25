abstract class Character {
  health: number;

  constructor(health: number) {
    this.health = health;
  }
  move() {}
  attack() {
    console.log(`I'm attack`);
  }
}

class Mrx extends Character {
  shield: number = 10;
  attack() {
    console.log(`I'm swinging with a sword`);
    this.shield -= 1;
  }
}
class Azraa extends Character {
  mana: number = 10;
  attack() {
    console.log(`Trowing a potion`);
    this.mana -= 1;
  }
}
class Reed extends Character {
  arrows: number = 10;
  attack() {
    console.log(`Firing an arrow`);
    this.arrows -= 1;
  }
}

class Tribe {
  private characters: Character[];
  constructor(characters: Character[]) {
    this.characters = characters;
  }
  attack(): void {
    for (let character of this.characters) {
      character.attack();
    }
  }
}

const mrx2: Character = new Mrx(10);
const azraa2: Character = new Azraa(10);
const reed: Character = new Reed(10);

const characters: Character[] = [mrx2, azraa2, reed];
const tribe = new Tribe(characters);
tribe.attack();

class Thief extends Character {
  attack(): void {
    super.attack();
    console.log("Pick pocket");
  }
}

const thief = new Thief(10);
const characters2: Character[] = [mrx2, thief];
const tribe2 = new Tribe(characters2);
tribe2.attack();
