"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.get = function () {
        return this.color;
    };
    Animals.prototype.set = function (x) {
        this.color = x;
    };
    return Animals;
}());
exports.Animals = Animals;
