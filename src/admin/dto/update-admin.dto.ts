import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty({ example: 'Eshmat Toshmatov' })
  full_name?: string;

  @ApiProperty({ example: 'email@gmail.com' })
  email?: string;

  @ApiProperty({ example: '887038006' })
  phone?: string;

  @ApiProperty({ example: '123' })
  password?: string;

  token?: string;
}
