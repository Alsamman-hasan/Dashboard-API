import { IsEmail, IsString } from 'class-validator';

export class UsersLoginDto {
	@IsEmail({}, { message: 'не верно указан email' })
	email: string;

	@IsString()
	password: string;
}
