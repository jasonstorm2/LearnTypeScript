"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var All = /** @class */ (function () {
    function All() {
        this.dd = 4;
        var ff = 6;
    }
    All.prototype.get = function () {
        return this.color;
    };
    All.prototype.set = function (x) {
        this.color = x;
    };
    return All;
}());
exports.All = All;
// 重新导出animal导出的模块AnimalsAsName,并重命名他
var animal_1 = require("./animal");
exports.renameAll = animal_1.AnimalsAsName;
