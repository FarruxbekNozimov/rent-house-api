import { ApiProperty } from '@nestjs/swagger';

export class UpdateDistrictDto {
  @ApiProperty({ example: "Chilonzor" })
	name?: string;

	
}
