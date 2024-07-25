import { IsString } from 'class-validator';

export class CreateProvinciaDto {
  @IsString()
  provincia: string;

  create_at: Date;
  delete_at: Date;
}
