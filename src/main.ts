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
import { IConfigService } from './config/config.service.interface';
import { ConfigService } from './config/config.service';
import { PrismaService } from './database/prisma.service';
import { IUsersRepository } from './users/user.repository.interface';
import { UsersRepository } from './users/users.repository';

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter).inSingletonScope();
appContainer.bind<IUserController>(TYPES.IUserController).to(UserController).inSingletonScope();
appContainer.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
appContainer.bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
appContainer.bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
appContainer.bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
appContainer.bind<App>(TYPES.Application).to(App).inSingletonScope();

const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
