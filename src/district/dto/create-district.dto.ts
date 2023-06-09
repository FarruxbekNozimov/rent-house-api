import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty({ example: "Chilonzor" })
	name: string;

	
}
