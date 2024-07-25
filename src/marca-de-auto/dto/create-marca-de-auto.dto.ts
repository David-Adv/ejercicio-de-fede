import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMarcaDeAutoDto {
  @ApiProperty()
  @IsString()
  marca_de_auto: string;

  crate_at: Date;
  delete_at: Date;
}
