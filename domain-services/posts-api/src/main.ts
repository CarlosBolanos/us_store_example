import { NestFactory } from '@nestjs/core';
import Swagger from './config/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Swagger(app);
  await app.listen(5002);
}
bootstrap();
