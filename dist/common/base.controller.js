"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = exports.Router = void 0;
var express_1 = require("express");
var express_2 = require("express");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_2.Router; } });
var BaseController = /** @class */ (function () {
    function BaseController(logger) {
        this.logger = logger;
        this._router = (0, express_1.Router)();
    }
    Object.defineProperty(BaseController.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    BaseController.prototype.bindRoutes = function (routes) {
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            this.logger.log("[".concat(route.method, "] ").concat(route.path));
            var handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;
