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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { AdminGuards } from '../guards/admin.guards';

@ApiBearerAuth()
@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create region' })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all region' })
  @Get()
  findAll(@Query() query: any) {
    return this.regionService.findAll(query);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one region' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(id);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update region by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete region by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(id);
  }
}
