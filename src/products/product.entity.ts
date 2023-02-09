export class ProductFeature{ 
  name: string;
  description: string;
}

export class ProductImages {
  url: string
  description: string
}

export class ProductEntity {
  id: string
  name: string
  value: number
  qty: number
  description: string
  features: ProductFeature[]
  images: ProductImages[]
  category: string
  userId: string
}