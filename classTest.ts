class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/**private 兼容测试 */
// 若是该为pulbic 则类互相兼容
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {  //同一个 private 同一个来源
    constructor() { super("Rhino"); }
}

//和类Animal2结构相似，但是有私有变量，不能兼容
class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // Error: Animal and Employee are not compatible--若是该为pulbic 则类互相兼容,两个类结构相似

/**protected test */
class Person33 {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee33 extends Person33 {
    protected department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee33("Howard", "Sales");
console.log(howard.getElevatorPitch());
//类的外部，不能直接访问父类的受保护的域
// console.log(howard.name); // error

/**构造函数的protected */
//受保护的构造函数测试
class Person44 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee44 extends Person44 {
    private department: string;    

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard44 = new Employee44("Howard", "Sales");
//受保护的构造函数，不能实例化
// let john44 = new Person44("John"); // Error: The 'Person' constructor is protected

/**参数属性 */
//在构造函数声明变量--添加了访问规则private等，以及赋值
//比在类里面声明，在构造时赋值要简便一些
//感觉最好不要如此，代码不清晰，不能直观的看到类里面的变量
class Animal55 {
    constructor(private name: string,public legs:number) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let animal55 = new Animal55("cat",4);
animal55.legs = 3;
animal55.move(1000);

/**存取器 */
console.log("--------存取器--------");

let passcode = "secret passcode";

class Employee66 {
    //约定的私有变量标志_
    private _fullName: string;
    private _nickName:string = "在声明处赋值";

    get fullName1(): string {
        return this._fullName;
    }
    set fullName2(newName: string) {
        console.log("设置名字中。。。。");
        
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
    get nickName():string{
        return this._nickName;
    }
    set nickName(newName:string){
        this._nickName = newName;
    }
}
let employee66 = new Employee66();
employee66.fullName2 = "Bob Smith"; //自动调用了set方法
if (employee66.fullName1) {
    console.log("雇佣者的名字："+employee66.fullName1);//自动调用了get方法
}
// employee66.nickName("小猫");
employee66.nickName = "小猫";

console.log("昵称："+employee66.nickName);
/**静态属性--static类变量 */
console.log("--------静态变量--------");
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
/**抽象类 */
/**抽象类 */
abstract class Animal77 {
    public name:string = 'haha';
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

class an77 extends Animal77{
    makeSound(): void {
        throw new Error("Method not implemented.");
    }
    
}
let obj = new an77();
console.log("动物名字:"+obj.name);
obj.move;
obj.move();
obj.makeSound();

/**构造函数 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

console.log("-----------");
class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet());







