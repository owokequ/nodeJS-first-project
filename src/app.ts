import express, {Express, Router} from 'express'
import { Server } from 'http';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';
import { IControllerRoute } from './common/route.interface.js';

export class App {
    app: Express;
    server?: Server;
    port: number;
    logger: LoggerService;
    userController: UserController


    constructor(logger: LoggerService,
        userController: UserController
        ){
        this.app = express()

        this.port = 8000;
        this.logger = logger;
        this.userController = userController
    }

    useRouter(){
        this.app.use('/users', this.userController.router)

    }

    public async init(){
        this.useRouter();
        this.server = this.app.listen(this.port)
        this.logger.log(`Server create on http://localhost:${this.port}`);
        
    }
}