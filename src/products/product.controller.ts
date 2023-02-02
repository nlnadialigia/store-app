import {Body, Controller, Get, Post} from "@nestjs/common";
import {IProduct} from "./product.model";
import {ProductRepository} from "./product.repository";

@Controller("/products")
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: IProduct) {
    this.productRepository.save(productData)
    return productData
  }

  @Get()
  async listProducts() {
    return this.productRepository.list()
  }
}
