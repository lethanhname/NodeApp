import { IsInt, IsOptional, Length, Min } from 'class-validator';

class CreateProductRequest {
  @Length(5, 10)
  name: string;

  @IsInt()
  @Min(1)
  price: number;

  @Length(10, 20)
  @IsOptional()
  description: string;
}

export default CreateProductRequest;