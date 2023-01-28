import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import {
  CreateStudentContent,
  UpdateStudentContent,
} from 'interface/repository/student';
import { StudentEntity } from 'entity/student';
import { StudentService } from './service';
import { ResStudent } from './api-schema';
import { CreateBodyDto, UpdateParamDto, UpdateBodyDto } from './dto';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async find(id: number): Promise<ResStudent> {
    const student = await this.studentService.find(id);
    return this.convertToResponse(student);
  }

  @Post()
  async create(@Body() body: CreateBodyDto): Promise<ResStudent> {
    const content: CreateStudentContent = {
      familiName: body.familyName,
      givenName: body.givenName,
    };
    const student = await this.studentService.create(content);
    return this.convertToResponse(student);
  }

  @Put()
  async update(
    @Param() param: UpdateParamDto,
    @Body() body: UpdateBodyDto,
  ): Promise<ResStudent> {
    const content: UpdateStudentContent = {
      familiName: body.familyName,
      givenName: body.givenName,
    };
    const student = await this.studentService.update(param.id, content);
    return this.convertToResponse(student);
  }

  @Delete()
  async delete(id: number): Promise<void> {
    await this.studentService.delete(id);
  }

  private convertToResponse(student: StudentEntity): ResStudent {
    return {
      id: student.id,
      fullName: student.fullName(),
      createdAt: student.createdAt.toISOString(),
    };
  }
}
