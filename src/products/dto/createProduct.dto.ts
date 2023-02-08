import {Type} from "class-transformer";
import {
  ArrayMinSize,
  IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID, MaxLength, Min, ValidateNested
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
  @ArrayMinSize(3, {message: "It must have at least three features"})
  features: ProductFeatureDTO[]

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImagesDTO)
  @IsNotEmpty({message: "It must have at least one image"})
  images: ProductImagesDTO[]

  @IsString()
  @IsNotEmpty({message: "Category should be not empty"})
  category: string

  @IsUUID(undefined, {message: "Invalid user id"})
  userId: string
}