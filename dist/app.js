"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users/users.controller");
const exception_filter_1 = require("./errors/exception.filter");
const inversify_1 = require("inversify");
const type_1 = require("./type");
const body_parser_1 = require("body-parser");
require("reflect-metadata");
let App = class App {
    constructor(logger, userController, ExceptionFilter) {
        this.logger = logger;
        this.userController = userController;
        this.ExceptionFilter = ExceptionFilter;
        this.app = (0, express_1.default)();
        this.port = 8000;
    }
    useMiddleware() {
        this.app.use((0, body_parser_1.json)());
    }
    useRouter() {
        this.app.use('/users', this.userController.router);
    }
    useExceptionFilters() {
        this.app.use(this.ExceptionFilter.catch.bind(this.ExceptionFilter));
    }
    async init() {
        this.useMiddleware();
        this.useRouter();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server create on http://localhost:${this.port}`);
    }
};
exports.App = App;
exports.App = App = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.ILogger)),
    __param(1, (0, inversify_1.inject)(type_1.TYPES.IUserController)),
    __param(2, (0, inversify_1.inject)(type_1.TYPES.ExceptionFilter)),
    __metadata("design:paramtypes", [Object, users_controller_1.UserController,
        exception_filter_1.ExceptionFilter])
], App);
//# sourceMappingURL=app.js.map