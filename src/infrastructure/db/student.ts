import { Injectable } from '@nestjs/common';

import {
  IStudentRepository,
  CreateStudentContent,
  UpdateStudentContent,
} from 'interface/repository/student';
import { StudentEntity } from 'entity/student';

const dummyStudent = new StudentEntity(123, 'yamada', 'taro', new Date());

@Injectable()
export class DBStudentRepository implements IStudentRepository {
  async find(id: number): Promise<StudentEntity> {
    return dummyStudent;
  }

  async create(content: CreateStudentContent): Promise<StudentEntity> {
    return dummyStudent;
  }

  async update(
    id: number,
    content: UpdateStudentContent,
  ): Promise<StudentEntity> {
    return dummyStudent;
  }

  async delete(id: number): Promise<void> {}
}
