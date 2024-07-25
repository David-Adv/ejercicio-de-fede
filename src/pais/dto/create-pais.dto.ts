import { IsString } from 'class-validator';

export class CreatePaisDto {
  @IsString()
  pais: string;
}
