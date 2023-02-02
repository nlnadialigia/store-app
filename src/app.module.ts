import {Module} from "@nestjs/common";
import {UserModule} from "./users/user.module";

@Module({
  controllers: [UserModule],
})

export class AppModule {}