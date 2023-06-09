import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  seller_id: number;

  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  receiver_id: number;
}
