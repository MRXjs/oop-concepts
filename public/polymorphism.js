"use strict";
class Character {
    constructor(health) {
        this.health = health;
    }
    move() { }
    attack() {
        console.log(`I'm attack`);
    }
}
class Mrx extends Character {
    constructor() {
        super(...arguments);
        this.shield = 10;
    }
    attack() {
        console.log(`I'm swinging with a sword`);
        this.shield -= 1;
    }
}
class Azraa extends Character {
    constructor() {
        super(...arguments);
        this.mana = 10;
    }
    attack() {
        console.log(`Trowing a potion`);
        this.mana -= 1;
    }
}
class Reed extends Character {
    constructor() {
        super(...arguments);
        this.arrows = 10;
    }
    attack() {
        console.log(`Firing an arrow`);
        this.arrows -= 1;
    }
}
class Tribe {
    constructor(characters) {
        this.characters = characters;
    }
    attack() {
        for (let character of this.characters) {
            character.attack();
        }
    }
}
const mrx2 = new Mrx(10);
const azraa2 = new Azraa(10);
const reed = new Reed(10);
const characters = [mrx2, azraa2, reed];
const tribe = new Tribe(characters);
tribe.attack();
class Thief extends Character {
    attack() {
        super.attack();
        console.log("Pick pocket");
    }
}
const thief = new Thief(10);
const characters2 = [mrx2, thief];
const tribe2 = new Tribe(characters2);
tribe2.attack();
