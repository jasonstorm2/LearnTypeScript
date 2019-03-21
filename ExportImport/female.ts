import {_name} from "./male";  //导入的名字要和导出的名字一致
import {_age,_hight} from "./male";  //导入的名字要和导出的名字一致
// import {_hight} from "./male";  //导入的名字要和导出的名字一致
import funcs from "./male";  //----若对方没有导出默认函数，编译不会报错，只有运行时才会报错
import {fun1} from "./male"; //----若没有花括号，则认为是对方导出的默认函数
import{Animals} from "./animal"; //导入函数

console.log("从male模块导入名字："+_name);
console.log("从male模块导入年龄："+_age);
console.log("从male模块导入年龄："+_hight);
console.log("从male模块导入默认函数："+funcs(3));
console.log("从male模块导入函数fun1："+fun1());

let aaaa = new Animals();
aaaa.set("blue");
console.log("Animals导入的函数get:"+aaaa.get());

