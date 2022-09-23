import { UserModel } from '@prisma/client';
import { UsersLoginDto } from './dto/users-login.dto';
import { UsersRegisterDto } from './dto/users-register.dto';

export interface IUserService {
	createUser: (dto: UsersRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UsersLoginDto) => Promise<boolean>;
}
