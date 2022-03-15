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
var Component = /** @class */ (function () {
    function Component(str) {
        this.str = str;
    }
    Component.prototype.operation = function () {
        console.log('operation of Component', this.str);
    };
    return Component;
}());
var Decorator = /** @class */ (function () {
    function Decorator(id, component) {
        this.component = component;
        this.id = id;
    }
    Decorator.prototype.newOperation = function () {
        console.log('new operation from decorator');
    };
    Decorator.prototype.specialOperation = function () {
        console.log('specialOperation from decorator');
    };
    Decorator.prototype.operation = function () {
        console.log('`operation` of Decorator', this.id);
        this.component.operation();
    };
    return Decorator;
}());
var SuperDecorator = /** @class */ (function (_super) {
    __extends(SuperDecorator, _super);
    function SuperDecorator(id, component) {
        return _super.call(this, id, component) || this;
    }
    SuperDecorator.prototype.operation = function () {
        _super.prototype.operation.call(this);
        console.log('operation of SuperDecorator');
    };
    return SuperDecorator;
}(Decorator));
var component = new Component('test');
var firstDecorator = new Decorator(1, component);
var superDecorator = new SuperDecorator(2, firstDecorator);
console.log(firstDecorator);
console.log(superDecorator);
