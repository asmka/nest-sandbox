import { Module } from '@nestjs/common';

import { StudentController } from './controller';
import { StudentService } from './service';
import { I_STUDENT_REPOSITORY_TOKEN } from 'interface/repository/student';
import { DBStudentRepository } from 'infrastructure/db/student';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [
    StudentService,
    {
      provide: I_STUDENT_REPOSITORY_TOKEN,
      useClass: DBStudentRepository,
    },
  ],
})
export class StudentModule {}
