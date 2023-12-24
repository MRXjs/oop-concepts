var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.great = function () {
        console.log("Hello my name is ".concat(this.name));
    };
    return Player;
}());
var mrx = new Player();
mrx.name = "Suresh";
mrx.health = 10;
mrx.isInvisible = false;
var pixie = new Player();
pixie.name = "Rusiri";
pixie.health = 10;
pixie.isInvisible = true;
mrx.crush = pixie;
mrx.crush.great();
