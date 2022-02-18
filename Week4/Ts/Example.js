"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var x = 10;
var y = 20;
var sum;
var title = "Mohit Chauhan";
var isBeginner = true;
var total = 0;
var name1 = 'mohit';
var sentence = "My name is".concat(name1, "\nI am beginner");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 23];
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Mohit";
var myVariable = 10;
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "bruce",
    lastName: "wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Mohit');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
