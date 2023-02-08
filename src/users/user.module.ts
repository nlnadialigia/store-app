import {Module} from "@nestjs/common";
import {UniqueEmailValidator} from "src/validation/email.validator";
import {UserController} from "./user.controller";
import {UserRepository} from "./user.repository";

@Module({
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator]
})

export class UserModule {}