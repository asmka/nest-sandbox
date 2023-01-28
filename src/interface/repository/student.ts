import { StudentEntity } from 'entity/student';

export const I_STUDENT_REPOSITORY_TOKEN = 'I_STUDENT_REPOSITORY_TOKEN';

export interface IStudentRepository {
  find(id: number): Promise<StudentEntity>;

  create(content: CreateStudentContent): Promise<StudentEntity>;

  update(id: number, content: UpdateStudentContent): Promise<StudentEntity>;

  delete(id: number): Promise<void>;
}

export interface CreateStudentContent {
  familiName: string;
  givenName: string;
}

export interface UpdateStudentContent {
  familiName?: string;
  givenName?: string;
}
