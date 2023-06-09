import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentController } from './rent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './schemas/rent.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rent.name, schema: RentSchema }]),
    JwtModule,
  ],
  controllers: [RentController],
  providers: [RentService],
})
export class RentModule {}
