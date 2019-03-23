let _name = "jason";
let _age = 12;
let _hight = 165;

let _feet =43;

//导出变量
export {_name}
export {_age,_hight}
// export _feet  要加花括号才能导出，否则报错

/**
 * 导出默认值  
 * 
 * 可以使函数，变量，对象  但必须只有一个 
 * 
 */

//导出 默认函数
export default function fuc1(x:number){ 
    return x*x;

}
//导出 空的默认函数--默认函数只能有一个
// export default function (){ 

// }
//导出 默认变量
// export default _feet


//导出有名字的函数
function fun1():number{
    return 666;
}

export {fun1};

//导出只声明变量
export let _sun
//导出声明并定义的变量
export let _gun = 10

/**导出改名 */
let _fuck = "fuck";
// export  _fuck as _luck  没有花括号会报错
//导出改名的变量   原名 as 修改名
export  {_fuck as _luck}  

// export {import {  } from "./animal";}

//导出一个接口 -- 转换成js，没有看到这个接口
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

