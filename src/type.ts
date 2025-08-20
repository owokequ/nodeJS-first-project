import { PrismaService } from "./database/prisma.service";
import { UsersRepository } from "./users/users.repository";

export const TYPES = {
    Application: Symbol.for('Application'),
    ILogger: Symbol.for('ILogger'),
    IUserController: Symbol.for('IUserController'),
    UserService: Symbol.for('UserService'),
    ExceptionFilter: Symbol.for('ExceptionFilter'),
    ConfigService: Symbol.for('ConfigService'),
    PrismaService: Symbol.for('PrismaService'),
    UsersRepository: Symbol.for('UsersRepository')

};
