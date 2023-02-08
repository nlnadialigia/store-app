import {IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {UniqueEmail} from "src/validation/email.validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: "Name should be not empty"})
  name: string;

  @IsEmail(undefined, { message: "Invalid email"})
  @UniqueEmail({message: "Email already registered"})
  email: string;

  @MinLength(6, {message: "Password must be longer than or equal to 6 characters"})
  password: string
}
