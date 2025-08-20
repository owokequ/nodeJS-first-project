import { verify } from 'jsonwebtoken';
import { IMiddleware } from './middleware.interface';
import { Request, Response, NextFunction } from 'express';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			// 2. Проверяем формат заголовка
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return next(); // нет токена - пропускаем
			}

			verify(token, this.secret, (err, payload) => {
				if (err) {
					return next(); // невалидный токен - пропускаем
				}

				if (payload && typeof payload === 'object' && 'email' in payload) {
					// 3. Правильно типизируем payload
					req.user = (payload as { email: string }).email;
				}
				next();
			});
		} else {
			next(); // нет заголовка - пропускаем
		}
	}
}
