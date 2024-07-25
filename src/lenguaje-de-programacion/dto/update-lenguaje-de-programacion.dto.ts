import { PartialType } from '@nestjs/mapped-types';
import { CreateLenguajeDeProgramacionDto } from './create-lenguaje-de-programacion.dto';

export class UpdateLenguajeDeProgramacionDto extends PartialType(CreateLenguajeDeProgramacionDto) {}
