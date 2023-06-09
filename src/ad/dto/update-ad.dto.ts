import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdDto {
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

	@ApiProperty({ example: "undefined" })
	people?: number;

	@ApiProperty({ example: "undefined" })
	client_status?: number;

	@ApiProperty({ example: "5" })
	square_meter?: number;

	@ApiProperty({ example: "false" })
	is_floor?: boolean;

	@ApiProperty({ example: "1" })
	home_floor?: number;

	@ApiProperty({ example: "1" })
	total_floor?: number;

	@ApiProperty({ example: "https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_464,h_324,dpr_2/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA" })
	img?: string;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	user_id?: number;

	
}
