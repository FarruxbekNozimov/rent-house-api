import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: '887038006' })
  phone: string;

  @ApiProperty({ example: '123' })
  password: string;
}
