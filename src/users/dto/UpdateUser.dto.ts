import {IsEmail, IsNotEmpty, IsOptional, MinLength} from "class-validator";
import {UniqueEmail} from "src/validation/email.validator";

export class UpdateUserDTO {
  @IsNotEmpty({ message: "Name should be not empty"})
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: "Invalid email"})
  @UniqueEmail({message: "Email already registered"})
  @IsOptional()
  email: string;

  @MinLength(6, {message: "Password must be longer than or equal to 6 characters"})
  @IsOptional()
  password: string
}
