import { IsEmail, IsString } from 'class-validator';

export class UsersRegisterDto {
	@IsEmail({}, { message: 'не верно указан email' })
	email: string;

	@IsString({ message: 'не указано пароль' })
	password: string;

	@IsString({ message: ' не указано имя ' })
	name: string;
}
