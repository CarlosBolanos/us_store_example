import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const Swagger = (app) => {
    const config = new DocumentBuilder()
    .setTitle('US Store API')
    .setDescription('US Store API description')
    .setVersion('1.0')
    .addTag('us-store-posts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}

export default Swagger