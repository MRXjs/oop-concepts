"use strict";
var _a;
class Player {
    constructor(name, health, isInvisible, crush = null) {
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
console.log((_a = mrx.crush) === null || _a === void 0 ? void 0 : _a.name);
