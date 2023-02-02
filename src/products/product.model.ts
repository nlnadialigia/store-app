interface IProduct {
  name: string, 
  value: number, 
  qty: number,
  description: string, 
  features: Array<IFeatures>, 
  images: Array<IImages>, 
  category: string,
  createdAt: Date,
  updatedAt: Date
}

interface IFeatures {
  name: string,
  description: string
}

interface IImages {
  url: string,
  description: string
}

export {IProduct};
