import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: "Name should be not empty"})
  name: string;

  @IsEmail(undefined, { message: "Invalid email"})
  email: string;

  @MinLength(6, {message: "Password must be longer than or equal to 6 characters"})
  password: string
}
