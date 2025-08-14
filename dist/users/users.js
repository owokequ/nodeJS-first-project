"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.use(function (req, res, next) {
    console.log('Обработчик юзерс ');
    next();
});
userRouter.post('/login', function (req, res) {
    res.send('login');
});
userRouter.post('/register', function (req, res) {
    res.send('register');
});
