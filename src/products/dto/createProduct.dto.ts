import {Type} from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsNumber,
  Min,
  MaxLength,
  ValidateNested,
  IsArray,
  MinLength,
  IsDate
} from "class-validator";

export class ProductFeatureDTO{ 
  @IsString()
  @IsNotEmpty({ message: "Name should be not empty"})
  name: string;
  
  @IsString()
  @IsNotEmpty({ message: "Description should be not empty"})
  description: string;
}

export class ProductImagesDTO {
  @IsUrl()
  @IsNotEmpty({ message: "Name should be not empty"})
  url: string

  @IsString()
  @IsNotEmpty({ message: "Description should be not empty"})
  description: string
}

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty({ message: "Name should be not empty"})
  name: string

  @IsNumber({ maxDecimalPlaces: 2,
    allowNaN: false,
    allowInfinity: false })
  @Min(1,
    {message: "Value must be more than zero"})
  value: number

  @IsNumber({maxDecimalPlaces: 0,
    allowNaN: false,
    allowInfinity: false})
  @Min(1,
    {message: "Invalid quantity"})
  qty: number

  @IsString()
  @IsNotEmpty({ message: "Description should be not empty"})
  @MaxLength(1000,
    {message: "It must have less than 1000 characters"})
  description: string

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeatureDTO)
  @MinLength(3,
    {message: "It must have at least three features"})
  features: ProductFeatureDTO[]

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImagesDTO)
  @IsNotEmpty({message: "It must have at least one image"})
  images: ProductImagesDTO[]

  @IsString()
  @IsNotEmpty({message: "Category should be not empty"})
  category: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}