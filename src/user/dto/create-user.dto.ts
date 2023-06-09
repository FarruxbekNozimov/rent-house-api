import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Toshmat' })
  first_name: string;

  @ApiProperty({ example: 'Eshmatov' })
  last_name: string;

  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @ApiProperty({ example: '887038006' })
  phone: string;

  @ApiProperty({ example: '123password' })
  password: string;
}
