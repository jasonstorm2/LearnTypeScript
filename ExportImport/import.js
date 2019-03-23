"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**导入变量 */
var export_1 = require("./export"); //导入的名字要和导出的名字一致
var export_2 = require("./export"); //导入的名字要和导出的名字一致
// import {_hight} from "./male";  //导入的名字要和导出的名字一致
console.log("从male模块导入名字：" + export_1._name);
console.log("从male模块导入年龄：" + export_2._age);
console.log("从male模块导入年龄：" + export_2._hight);
/** 导入默认模块 */
console.log("------------导入默认模块---------------");
var export_3 = require("./export"); //----导入export的默认函数，若对方没有导出默认函数，编译不会报错，只有运行时才会报错....默认函数名字可以随便取
var export_4 = require("./export"); //----若没有花括号，则认为是对方导出的默认函数
console.log("从male模块导入默认函数：" + export_3.default(3));
console.log("从male模块导入函数fun1：" + export_4.fun1());
console.log("从male模块导入变量funcss：" + export_3.default); //如果默认导出的是变量，则打出变量值，都则打出此函数的函数语句
/**导入类 */
console.log("------------导入类---------------");
var animal_1 = require("./animal"); //导入整个类
var aaaa = new animal_1.AnimalsAsName(); //类的实例化
console.log("Animals导入的函数set:" + aaaa.set("blue")); //调用对象的方法 
console.log("Animals导入的函数get:" + aaaa.get());
/**导入变量 */
console.log("------------导入变量---------------");
var export_5 = require("./export"); //导入只声明未定义的变量
var export_6 = require("./export"); //导入在导出中声明和定义的变量
var export_7 = require("./export"); //导入被修改名字的变量
console.log("从male模块导入_sun：" + export_5._sun); //undefined
console.log("从male模块导入_gun：" + export_6._gun); //10
console.log("从male模块导入_luck：" + export_7._luck); //fuck
/**导入All */
console.log("------------导入All---------------");
var exportAll_1 = require("./exportAll"); // 导入All 类
var all = new exportAll_1.All();
console.log("exportAll模块All类的对象，dd：" + all.dd);
/**导入重新导出的类 */
console.log("------------导入重新导出的类---------------");
var exportAll_2 = require("./exportAll"); //重新导出并被重命名的类
var reAll = new exportAll_2.renameAll();
console.log(reAll.dd);
/**导入联合导出类 */
console.log("------------导入联合导出类---------------");
//联合导出类，可以获得所有导出类的元素
var AllEx = require("./AllExport");
AllEx.All;
console.log("AllEx._gun:" + AllEx._gun);
console.log("AllEx._hight:" + AllEx._hight);
console.log("AllEx._luck:" + AllEx._luck);
console.log("AllEx._sun:" + AllEx._sun);
/**导入全局变量？？？ */
console.log("------------导入全局变量？？？---------------");
require("./globalVariable");
// console.log("得到了全"+arg1);
