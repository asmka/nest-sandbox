import { Module } from '@nestjs/common';
import { StudentModule } from './module/student';

@Module({
  imports: [StudentModule],
})
export class AppModule {}
