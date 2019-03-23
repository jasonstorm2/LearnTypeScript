
/**导入变量 */
import {_name} from "./export";  //导入的名字要和导出的名字一致
import {_age,_hight} from "./export";  //导入的名字要和导出的名字一致
// import {_hight} from "./male";  //导入的名字要和导出的名字一致
console.log("从male模块导入名字："+_name);
console.log("从male模块导入年龄："+_age);
console.log("从male模块导入年龄："+_hight);


/** 导入默认模块 */
console.log("------------导入默认模块---------------");

import funcss from "./export";  //----导入export的默认函数，若对方没有导出默认函数，编译不会报错，只有运行时才会报错....默认函数名字可以随便取
import {fun1} from "./export"; //----若没有花括号，则认为是对方导出的默认函数
console.log("从male模块导入默认函数："+funcss(3));
console.log("从male模块导入函数fun1："+fun1());
console.log("从male模块导入变量funcss："+funcss);  //如果默认导出的是变量，则打出变量值，都则打出此函数的函数语句

/**导入类 */
console.log("------------导入类---------------");

import{AnimalsAsName as animal} from "./animal"; //导入整个类
let aaaa = new animal();  //类的实例化
console.log("Animals导入的函数set:"+aaaa.set("blue"));//调用对象的方法 
console.log("Animals导入的函数get:"+aaaa.get());

/**导入变量 */
console.log("------------导入变量---------------");

import {_sun} from "./export";  //导入只声明未定义的变量
import {_gun} from "./export";  //导入在导出中声明和定义的变量
import {_luck} from "./export"; //导入被修改名字的变量
console.log("从male模块导入_sun："+_sun);//undefined
console.log("从male模块导入_gun："+_gun);//10
console.log("从male模块导入_luck："+_luck);//fuck

/**导入All */
console.log("------------导入All---------------");

import {All} from "./exportAll";  // 导入All 类
import {StringValidator} from "./export";  // 导入文件中的另外一个接口

let all = new All();
console.log("exportAll模块All类的对象，dd："+all.dd);

/**导入重新导出的类 */
console.log("------------导入重新导出的类---------------");
import {renameAll} from  "./exportAll"; //重新导出并被重命名的类
let reAll = new renameAll();
console.log(reAll.dd);

/**导入联合导出类 */
console.log("------------导入联合导出类---------------");
//联合导出类，可以获得所有导出类的元素
import * as AllEx from "./AllExport";
AllEx.All;
console.log("AllEx._gun:"+AllEx._gun);
console.log("AllEx._hight:"+AllEx._hight);
console.log("AllEx._luck:"+AllEx._luck);
console.log("AllEx._sun:"+AllEx._sun);

/**导入全局变量？？？ */
console.log("------------导入全局变量？？？---------------");
import "./globalVariable";
// console.log("得到了全"+arg1);






