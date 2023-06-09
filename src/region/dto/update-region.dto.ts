import { ApiProperty } from '@nestjs/swagger';

export class UpdateRegionDto {
  @ApiProperty({ example: "Toshkent" })
	name?: string;

	
}
