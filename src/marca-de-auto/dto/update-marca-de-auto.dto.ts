import { PartialType } from '@nestjs/swagger';
import { CreateMarcaDeAutoDto } from './create-marca-de-auto.dto';

export class UpdateMarcaDeAutoDto extends PartialType(CreateMarcaDeAutoDto) {}
