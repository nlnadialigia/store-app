import {Type} from "class-transformer";
import {
  ArrayMinSize,
  IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min, ValidateNested
} from "class-validator";
import {ProductFeatureDTO, ProductImagesDTO} from "./createProduct.dto";


export class UpdateProductDTO {
  @IsString()
  @IsNotEmpty({ message: "Name should be not empty"})
  @IsOptional()
  name: string

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, {message: "Value must be more than zero"})
  @IsOptional()
  value: number

  @IsNumber({maxDecimalPlaces: 0, allowNaN: false, allowInfinity: false})
  @Min(1, {message: "Invalid quantity"})
  @IsOptional()
  qty: number

  @IsString()
  @IsNotEmpty({ message: "Description should be not empty"})
  @MaxLength(1000, {message: "It must have less than 1000 characters"})
  @IsOptional()
  description: string

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeatureDTO)
  @ArrayMinSize(3, {message: "It must have at least three features"})
  @IsOptional()
  features: ProductFeatureDTO[]

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImagesDTO)
  @IsNotEmpty({message: "It must have at least one image"})
  @IsOptional()
  images: ProductImagesDTO[]

  @IsString()
  @IsNotEmpty({message: "Category should be not empty"})
  @IsOptional()
  category: string
  
  @IsUUID(undefined, {message: "Invalid user id"})
  @IsOptional()
  userId: string
}