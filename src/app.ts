import express, {Express} from 'express'
import { userRouter } from './users/users.js';
import { Server } from 'http';

export class App {
    app: Express;
    server: Server;
    port: number;

    constructor(){
        this.app = express()
        this.port = 8000;
    }

    useRouter(){
        this.app.use('/users', userRouter)
    }

    public async init(){
        this.useRouter();
        this.server = this.app.listen(this.port)
        console.log(`Server create on http://localhost:${this.port}`);
        
    }
}