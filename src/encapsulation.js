var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setHealth = function (health) {
        this.health = health;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    return Player;
}());
var mrx = new Player();
mrx.setHealth(10);
console.log(mrx.getHealth());
