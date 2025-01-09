import { IsPhoneNumber, IsStrongPassword } from 'class-validator';

export class CreateAccountDto {
  @IsPhoneNumber('VN', { message: 'invalid phone number' })
  phoneNumber: string;

  @IsStrongPassword(
    { minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 },
    { message: 'password dont match pattern' },
  )
  password: string;
}
