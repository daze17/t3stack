import { Module } from '@nestjs/common';
import { AppController } from '@/modules/app/app.controller';
import { AppService } from '@/modules/app/app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration, validate } from '@/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
