import { Injectable, Inject } from '@nestjs/common';

import { StudentEntity } from 'entity/student';
import {
  I_STUDENT_REPOSITORY_TOKEN,
  IStudentRepository,
  CreateStudentContent,
  UpdateStudentContent,
} from 'interface/repository/student';

@Injectable()
export class StudentService {
  constructor(
    @Inject(I_STUDENT_REPOSITORY_TOKEN)
    private readonly studentRepository: IStudentRepository,
  ) {}

  async find(id: number): Promise<StudentEntity> {
    return this.studentRepository.find(id);
  }

  async create(student: CreateStudentContent): Promise<StudentEntity> {
    return this.studentRepository.create(student);
  }

  async update(
    id: number,
    student: UpdateStudentContent,
  ): Promise<StudentEntity> {
    return this.studentRepository.update(id, student);
  }

  async delete(id: number): Promise<void> {
    return this.studentRepository.delete(id);
  }
}
