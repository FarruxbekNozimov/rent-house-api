import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: "Eshmat Toshmatov" })
	full_name: string;

	@ApiProperty({ example: "email@gmail.com" })
	email: string;

	@ApiProperty({ example: "887038006" })
	phone: string;

	@ApiProperty({ example: "" })
	token: string;

	
}
