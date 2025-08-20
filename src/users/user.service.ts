import { inject, injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../type';
import { IUsersRepository } from './user.repository.interface';
import { UserModel } from '@prisma/client';
import {} from 'bcryptjs';
import { compare } from 'bcryptjs';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
	) {}

	async createUser({ email, name, password }: UserRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		const exitedUser = await this.usersRepository.find(email);
		if (exitedUser) {
			return null;
		}

		return this.usersRepository.create(newUser);
	}
	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		const user = await this.usersRepository.find(email);
		if (!user) {
			return false;
		}
		const newUser = new User(user.email, user.name ,user.password);
		return newUser.comparePassword(password);
	}
}
