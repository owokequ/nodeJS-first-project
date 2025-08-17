"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
var tslog_1 = require("tslog");
var LoggerService = /** @class */ (function () {
    function LoggerService() {
        var loggerTemplate = "{{yyyy}}-{{mm}}-{{dd}} {{hh}}:{{MM}}:{{ss}} {{logLevelName}}: ";
        this.logger = new tslog_1.Logger({
            prettyLogTemplate: loggerTemplate,
        });
    }
    LoggerService.prototype.log = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.logger).info.apply(_a, args);
    };
    LoggerService.prototype.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.logger).error.apply(_a, args);
    };
    LoggerService.prototype.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.logger).warn.apply(_a, args);
    };
    return LoggerService;
}());
exports.LoggerService = LoggerService;
