import { PartialType } from '@nestjs/mapped-types';
import { CreateColorAutoDto } from './create-color_auto.dto';

export class UpdateColorAutoDto extends PartialType(CreateColorAutoDto) {}
