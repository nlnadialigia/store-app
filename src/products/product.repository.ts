import {Injectable} from "@nestjs/common";
import {ProductEntity} from "./product.entity";

@Injectable()
export class ProductRepository {
  private products = []

  private searchProductById(id: string) {
    const searchProduct = this.products.find(
      product => product.id === id
    )

    return searchProduct
  }

  async save(product: ProductEntity) {
    this.products.push(product)
  }

  async list() {
    return this.products
  }

  async update(id: string, updateData: Partial<ProductEntity>) {
    const product = this.searchProductById(id)
    const blockedData = ["id", "userId"]

    Object.entries(updateData).forEach(([key, value]) => {
      if (blockedData.includes(key)) {
        return
      }

      product[key] = value
    })

    return product
  }

  async remove(id: string) {
    const removedProduct = this.products.filter(
      product => product.id !== id
    )

    return removedProduct
  }
}