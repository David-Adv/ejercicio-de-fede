import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LenguajeDeProgramacionService } from './lenguaje-de-programacion.service';
import { CreateLenguajeDeProgramacionDto } from './dto/create-lenguaje-de-programacion.dto';
import { UpdateLenguajeDeProgramacionDto } from './dto/update-lenguaje-de-programacion.dto';

@Controller('lenguaje-de-programacion')
export class LenguajeDeProgramacionController {
  constructor(private readonly lenguajeDeProgramacionService: LenguajeDeProgramacionService) {}

  @Post()
  create(@Body() createLenguajeDeProgramacionDto: CreateLenguajeDeProgramacionDto) {
    return this.lenguajeDeProgramacionService.create(createLenguajeDeProgramacionDto);
  }

  @Get()
  findAll() {
    return this.lenguajeDeProgramacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajeDeProgramacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguajeDeProgramacionDto: UpdateLenguajeDeProgramacionDto) {
    return this.lenguajeDeProgramacionService.update(+id, updateLenguajeDeProgramacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguajeDeProgramacionService.remove(+id);
  }
}
