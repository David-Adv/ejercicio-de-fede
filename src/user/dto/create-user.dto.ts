import { IsNumber, IsString } from 'class-validator';
import { Tipo } from '../../tipo/entities/tipo.entity';

export class CreateUserDto {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;
  @IsNumber()
  DNI: Number;

  @IsNumber()
  tipoUsuario: Tipo[];
}
