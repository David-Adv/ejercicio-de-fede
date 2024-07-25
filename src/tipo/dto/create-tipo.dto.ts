import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTipoDto {
  @ApiProperty()
  @IsString()
  tipoUsuario: string;
}
