import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Reproduction, uncomment these lines:
// import { AppModule as OtherAppModule } from '@apps/monorepo-repro-build/src/app.module'

// console.log(OtherAppModule)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
