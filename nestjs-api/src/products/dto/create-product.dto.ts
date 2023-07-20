import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({
    example: 'Product Title',
    description: 'The title of the product',
  })
  title: string;

  @ApiProperty({
    example: 'Product Description',
    description: 'The description of the product',
  })
  description: string;

  @ApiProperty({
    example: 9.99,
    description: 'The price of the product',
    type: Number,
  })
  price: number;
}
