import {Injectable} from "@nestjs/common";
import {IProduct} from "./product.model";

@Injectable()
export class ProductRepository {
  private products = []

  async save(product: IProduct) {
    this.products.push(product)
  }

  async list() {
    return this.products
  }
}