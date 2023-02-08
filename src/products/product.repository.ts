import {Injectable} from "@nestjs/common";
import {CreateProductDTO} from "./dto/createProduct.dto";

@Injectable()
export class ProductRepository {
  private products = []

  async save(product: CreateProductDTO) {
    this.products.push(product)
  }

  async list() {
    return this.products
  }
}