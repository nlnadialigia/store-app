import {Injectable} from "@nestjs/common";
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";
import {UserRepository} from "src/users/user.repository";

@Injectable() // transforma a classe em provider
@ValidatorConstraint() // informa para o class-validator que essa validação é assíncrona
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: string): Promise<boolean> {
    const userExist = await this.userRepository.emailExist(value)

    return !userExist
  }
}


export const UniqueEmail = (options: ValidationOptions) => {
  return (object: {constructor: any;}, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: UniqueEmailValidator
    })
  }
}