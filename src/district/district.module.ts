import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { District, DistrictSchema } from './schemas/district.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: District.name, schema: DistrictSchema }]),
    JwtModule,
  ],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
