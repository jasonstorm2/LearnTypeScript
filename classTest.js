var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/**private 兼容测试 */
// 若是该为pulbic 则类互相兼容
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal2));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal2("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
animal = employee; // Error: Animal and Employee are not compatible--若是该为pulbic 则类互相兼容
/**protected test */
var Person33 = /** @class */ (function () {
    function Person33(name) {
        this.name = name;
    }
    return Person33;
}());
var Employee33 = /** @class */ (function (_super) {
    __extends(Employee33, _super);
    function Employee33(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee33.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee33;
}(Person33));
var howard = new Employee33("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
/**构造函数的protected */
var Person44 = /** @class */ (function () {
    function Person44(theName) {
        this.name = theName;
    }
    return Person44;
}());
// Employee can extend Person
var Employee44 = /** @class */ (function (_super) {
    __extends(Employee44, _super);
    function Employee44(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee44.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee44;
}(Person44));
var howard44 = new Employee44("Howard", "Sales");
var john44 = new Person44("John"); // Error: The 'Person' constructor is protected
/**参数属性 */
//在构造函数声明变量--添加了访问规则private等，以及赋值
//比在类里面声明，在构造时赋值要简便一些
//感觉最好不要如此，代码不清晰，不能直观的看到类里面的变量
var Animal55 = /** @class */ (function () {
    function Animal55(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    Animal55.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal55;
}());
var animal55 = new Animal55("cat", 4);
animal55.legs = 3;
animal55.move(1000);
/**存取器 */
console.log("--------存取器--------");
var passcode = "secret passcode";
var Employee66 = /** @class */ (function () {
    function Employee66() {
        this._nickName = "在声明处赋值";
    }
    Object.defineProperty(Employee66.prototype, "fullName1", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee66.prototype, "fullName2", {
        set: function (newName) {
            console.log("设置名字中。。。。");
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee66.prototype, "nickName", {
        get: function () {
            return this._nickName;
        },
        set: function (newName) {
            this._nickName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee66;
}());
var employee66 = new Employee66();
employee66.fullName2 = "Bob Smith"; //自动调用了set方法
if (employee66.fullName1) {
    console.log("雇佣者的名字：" + employee66.fullName1); //自动调用了get方法
}
// employee66.nickName("小猫");
employee66.nickName = "小猫";
console.log("昵称：" + employee66.nickName);
/**静态属性--static类变量 */
console.log("--------静态变量--------");
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/**抽象类 */
/**抽象类 */
var Animal77 = /** @class */ (function () {
    function Animal77() {
        this.name = 'haha';
    }
    Animal77.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal77;
}());
var an77 = /** @class */ (function (_super) {
    __extends(an77, _super);
    function an77() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    an77.prototype.makeSound = function () {
        throw new Error("Method not implemented.");
    };
    return an77;
}(Animal77));
var obj = new an77();
console.log("动物名字:" + obj.name);
obj.move;
obj.move();
obj.makeSound();
/**构造函数 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
console.log("-----------");
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = "Hello, there";
    return Greeter2;
}());
var greeter1;
greeter1 = new Greeter2();
console.log(greeter1.greet());
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
