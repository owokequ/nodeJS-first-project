import express, {Express} from 'express'
import { userRouter } from './users/users.js';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service.js';

export class App {
    app: Express;
    server?: Server;
    port: number;
    logger: LoggerService;

    constructor(logger: LoggerService){
        this.app = express()
        this.port = 8000;
        this.logger = logger;
    }

    useRouter(){
        this.app.use('/users', userRouter)
    }

    public async init(){
        this.useRouter();
        this.server = this.app.listen(this.port)
        this.logger.log(`Server create on http://localhost:${this.port}`);
        
    }
}