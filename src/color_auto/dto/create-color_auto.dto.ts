import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorAutoDto {
  @ApiProperty()
  @IsString()
  ColorDeAuto: string;

  create_at: Date;

  delete_at: Date;
}
