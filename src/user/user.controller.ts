import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';
import { AdminGuards } from '../guards/admin.guards';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create user' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all user' })
  @Get()
  findAll(@Query() query: any) {
    return this.userService.findAll(query);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one user' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one user by phone number' })
  @Get('phone/:phone')
  findByPhone(@Param('phone') phone: string) {
    return this.userService.findByPhone(phone);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update user by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete user by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
