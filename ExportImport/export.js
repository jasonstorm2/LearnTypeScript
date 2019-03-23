"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _name = "jason";
exports._name = _name;
var _age = 12;
exports._age = _age;
var _hight = 165;
exports._hight = _hight;
var _feet = 43;
// export _feet  要加花括号才能导出，否则报错
/**
 * 导出默认值
 *
 * 可以使函数，变量，对象  但必须只有一个
 *
 */
//导出 默认函数
function fuc1(x) {
    return x * x;
}
exports.default = fuc1;
//导出 空的默认函数--默认函数只能有一个
// export default function (){ 
// }
//导出 默认变量
// export default _feet
//导出有名字的函数
function fun1() {
    return 666;
}
exports.fun1 = fun1;
//导出声明并定义的变量
exports._gun = 10;
/**导出改名 */
var _fuck = "fuck";
exports._luck = _fuck;
