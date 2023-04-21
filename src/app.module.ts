import { Module } from '@nestjs/common';
import { testModule } from './module/test.module';

@Module({
  imports: [testModule],
})
export class AppModule {}
