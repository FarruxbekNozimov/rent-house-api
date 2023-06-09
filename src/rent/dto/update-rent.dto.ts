import { ApiProperty } from '@nestjs/swagger';

export class UpdateRentDto {
  @ApiProperty({ example: "507f1f77bcf86cd799439011" })
	region_id?: number;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	district_id?: number;

	@ApiProperty({ example: "Str. 7 Shuhrat chorraha" })
	address?: string;

	@ApiProperty({ example: "41.40338-2.17403" })
	location?: string;

	@ApiProperty({ example: "true" })
	gas?: boolean;

	@ApiProperty({ example: "false" })
	light?: boolean;

	@ApiProperty({ example: "true" })
	water_cold?: boolean;

	@ApiProperty({ example: "true" })
	water_hot?: boolean;

	@ApiProperty({ example: "false" })
	conditioner?: boolean;

	@ApiProperty({ example: "true" })
	freezer?: boolean;

	@ApiProperty({ example: "euroremont" })
	status?: string;

	@ApiProperty({ example: "65000" })
	price?: string;

	@ApiProperty({ example: "5" })
	square_meter?: number;

	@ApiProperty({ example: "true" })
	is_floor?: boolean;

	@ApiProperty({ example: "3" })
	home_floor?: number;

	@ApiProperty({ example: "5" })
	total_floor?: number;

	@ApiProperty({ example: "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" })
	img?: string;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	user_id?: number;

	
}
