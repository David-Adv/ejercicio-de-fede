import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColorAutoDto } from './dto/create-color_auto.dto';
import { UpdateColorAutoDto } from './dto/update-color_auto.dto';
import { ColorAuto } from './entities/color_auto.entity';

@Injectable()
export class ColorAutoService {
  constructor(
    @InjectRepository(ColorAuto)
    private readonly color_autoRepository: Repository<ColorAuto>,
  ) {}

  create(createColorAutoDto: CreateColorAutoDto) {
    return this.color_autoRepository.save(createColorAutoDto);
  }

  findAll() {
    return this.color_autoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} colorAuto`;
  }

  update(id: number, updateColorAutoDto: UpdateColorAutoDto) {
    // return
    // return `This action updates a #${id} colorAuto`;
  }

  remove(id: number) {
    this.color_autoRepository.softDelete({ id: id });

    return `This action removes a #${id} colorAuto`;
  }
}
