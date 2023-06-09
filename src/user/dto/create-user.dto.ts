import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: "Toshmat" })
	first_name: string;

	@ApiProperty({ example: "Eshmatov" })
	last_name: string;

	@ApiProperty({ example: "email@gmail.com" })
	email: string;

	@ApiProperty({ example: "887038006" })
	phone: string;

	@ApiProperty({ example: "123password" })
	password: string;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	ad_id: number;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	order_id: number;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	notification_id: number;

	@ApiProperty({ example: "" })
	token: string;

	
}
