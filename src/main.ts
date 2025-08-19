import { Container } from 'inversify';
import 'reflect-metadata';
import { App } from './app';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './type';
import { IExceptionFilter } from './errors/exception.filter.interface';
import { IUserController } from './users/users.interface';
import { IUserService } from './users/users.service.interface';
import { UserService } from './users/user.service';

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<IUserController>(TYPES.IUserController).to(UserController);
appContainer.bind<IUserService>(TYPES.UserService).to(UserService);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
