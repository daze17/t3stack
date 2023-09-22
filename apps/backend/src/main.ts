import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { NestApplicationOptions } from '@nestjs/common';

async function bootstrap() {
  const config: NestApplicationOptions = {
    bufferLogs: true,
    cors: {
      origin: ['http://localhost:3000'],
    },
  };
  const app = await NestFactory.create(AppModule, config);

  const port = process.env.PORT;

  await app.listen(port || 3001);
}
bootstrap();
