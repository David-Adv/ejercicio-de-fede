import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { Tipo } from './entities/tipo.entity';

@Injectable()
export class TipoService {
  constructor(
    @InjectRepository(Tipo)
    private readonly tipeRepository: Repository<Tipo>,
  ) {}

  create(createTipoDto: CreateTipoDto) {
    return this.tipeRepository.save(createTipoDto);
  }

  findAll() {
    return this.tipeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipo`;
  }

  update(id: number, updateTipoDto: UpdateTipoDto) {
    return `This action updates a #${id} tipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipo`;
  }
}
