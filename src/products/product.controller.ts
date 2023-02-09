import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {randomUUID} from "crypto";
import {CreateProductDTO} from "./dto/createProduct.dto";
import {ListProductDTO} from "./dto/listProduct.dto";
import {UpdateProductDTO} from "./dto/updateProduct.dto";
import {ProductEntity} from "./product.entity";
import {ProductRepository} from "./product.repository";

@Controller("/products")
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity = new ProductEntity()
    productEntity.id = randomUUID()
    productEntity.name = productData.name
    productEntity.value = productData.value
    productEntity.qty = productData.qty
    productEntity.description = productData.description
    productEntity.features = productData.features
    productEntity.images = productData.images
    productEntity.category = productData.category
    productEntity.userId = productData.userId

    this.productRepository.save(productEntity)

    return {
      product: new ListProductDTO(productEntity.id, productEntity.name),
      message: "Product successfully created"
    }
  }

  @Get()
  async listProducts() {
    return this.productRepository.list()
  }

  @Put("/:id")
  async updateProduct(@Param("id") id: string, @Body() newData: UpdateProductDTO) {
    const productUpdated = await this.productRepository.update(id, newData)

    return {
      product: productUpdated,
      message: "Product successfully updated"
    }
  }

  @Delete("/:id")
  async removeProduct(@Param("id") id: string) {
    const removed = await this.productRepository.remove(id)

    return {
      product: removed,
      message: "Product successfully removed"
    }
  }
}
