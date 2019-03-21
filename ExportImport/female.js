"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var male_1 = require("./male"); //导入的名字要和导出的名字一致
var male_2 = require("./male"); //导入的名字要和导出的名字一致
// import {_hight} from "./male";  //导入的名字要和导出的名字一致
var male_3 = require("./male"); //----若对方没有导出默认函数，编译不会报错，只有运行时才会报错
var male_4 = require("./male"); //----若没有花括号，则认为是对方导出的默认函数
var animal_1 = require("./animal"); //导入函数
console.log("从male模块导入名字：" + male_1._name);
console.log("从male模块导入年龄：" + male_2._age);
console.log("从male模块导入年龄：" + male_2._hight);
console.log("从male模块导入默认函数：" + male_3.default(3));
console.log("从male模块导入函数fun1：" + male_4.fun1());
var aaaa = new animal_1.Animals();
aaaa.set("blue");
console.log("Animals导入的函数get:" + aaaa.get());
