import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { RentModule } from './rent/rent.module';
import { AdModule } from './ad/ad.module';
import { OrderModule } from './order/order.module';
import { NotificationModule } from './notification/notification.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UserModule,
    AdminModule,
    RentModule,
    AdModule,
    OrderModule,
    NotificationModule,
    RegionModule,
    DistrictModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
