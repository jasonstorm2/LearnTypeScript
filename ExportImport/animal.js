"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animals = /** @class */ (function () {
    // let ff2:number = 6; //这种结构放在此处会出问题
    function Animals() {
        this.dd = 4;
        var ff = 6; //在构造器或者方法中就不会有问题
    }
    Animals.prototype.get = function () {
        return this.color;
    };
    Animals.prototype.set = function (x) {
        this.color = x;
    };
    return Animals;
}());
exports.AnimalsAsName = Animals;
