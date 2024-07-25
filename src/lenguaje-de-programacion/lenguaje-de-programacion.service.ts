import { Injectable } from '@nestjs/common';
import { CreateLenguajeDeProgramacionDto } from './dto/create-lenguaje-de-programacion.dto';
import { UpdateLenguajeDeProgramacionDto } from './dto/update-lenguaje-de-programacion.dto';

@Injectable()
export class LenguajeDeProgramacionService {
  create(createLenguajeDeProgramacionDto: CreateLenguajeDeProgramacionDto) {
    return 'This action adds a new lenguajeDeProgramacion';
  }

  findAll() {
    return `This action returns all lenguajeDeProgramacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lenguajeDeProgramacion`;
  }

  update(id: number, updateLenguajeDeProgramacionDto: UpdateLenguajeDeProgramacionDto) {
    return `This action updates a #${id} lenguajeDeProgramacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} lenguajeDeProgramacion`;
  }
}
