import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDeAutoDto } from './dto/create-marca-de-auto.dto';
import { UpdateMarcaDeAutoDto } from './dto/update-marca-de-auto.dto';
import { MarcaDeAuto } from './entities/marca-de-auto.entity';

@Injectable()
export class MarcaDeAutoService {
  constructor(
    @InjectRepository(MarcaDeAuto)
    private readonly marca_de_autoRepository: Repository<MarcaDeAuto>,
  ) {}

  create(createMarcaDeAutoDto: CreateMarcaDeAutoDto) {
    return this.marca_de_autoRepository.save(createMarcaDeAutoDto);
  }

  findAll() {
    return this.marca_de_autoRepository.find();

    // return `This action returns all marcaDeAuto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marcaDeAuto`;
  }

  update(id: number, updateMarcaDeAutoDto: UpdateMarcaDeAutoDto) {
    return `This action updates a #${id} marcaDeAuto`;
  }

  remove(id: number) {
    return `This action removes a #${id} marcaDeAuto`;
  }
}
