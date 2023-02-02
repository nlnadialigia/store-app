import {Module} from "@nestjs/common";
import {ProductModel} from "./products/product.module";
import {UserModule} from "./users/user.module";

@Module({
  imports: [UserModule, ProductModel],
})

export class AppModule {}