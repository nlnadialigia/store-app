import {Module} from "@nestjs/common";
import {UsersController} from "./user.controller";
import {UsersRepository} from "./user.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersRepository]
})

export class UserModule {}