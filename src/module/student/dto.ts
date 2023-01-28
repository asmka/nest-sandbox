import { IsInt, IsString } from 'class-validator';
import { ReqPostStudent, ReqPutStudent } from './api-schema';

export class CreateBodyDto implements ReqPostStudent {
  @IsString()
  familyName: string;

  @IsString()
  givenName: string;
}

export class UpdateParamDto {
  @IsInt()
  id: number;
}

export class UpdateBodyDto implements ReqPutStudent {
  @IsString()
  familyName: string;

  @IsString()
  givenName: string;
}

export class DeleteParamDto {
  @IsInt()
  id: number;
}
