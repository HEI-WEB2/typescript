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
var OhatraHoe = /** @class */ (function () {
    function OhatraHoe() {
    }
    return OhatraHoe;
}());
var Hafa = /** @class */ (function () {
    function Hafa() {
    }
    Hafa.prototype.help = function (s) {
    };
    return Hafa;
}());
var AClass = /** @class */ (function () {
    function AClass() {
    }
    return AClass;
}());
var ConcreteClass = /** @class */ (function (_super) {
    __extends(ConcreteClass, _super);
    function ConcreteClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fn = function () {
        };
        return _this;
    }
    return ConcreteClass;
}(AClass));
var Color;
(function (Color) {
    Color["BLUE"] = "blue";
    Color["RED"] = "red";
    Color["PURPLE"] = "purple";
})(Color || (Color = {}));
