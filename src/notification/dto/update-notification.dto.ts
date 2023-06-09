import { ApiProperty } from '@nestjs/swagger';

export class UpdateNotificationDto {
  @ApiProperty({ example: "507f1f77bcf86cd799439011" })
	user_id?: number;

	@ApiProperty({ example: "507f1f77bcf86cd799439011" })
	appeal_id?: number;

	@ApiProperty({ example: "This user following to you" })
	description?: string;

	
}
