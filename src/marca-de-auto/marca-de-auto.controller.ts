import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMarcaDeAutoDto } from './dto/create-marca-de-auto.dto';
import { UpdateMarcaDeAutoDto } from './dto/update-marca-de-auto.dto';
import { MarcaDeAutoService } from './marca-de-auto.service';

@Controller('marca-de-auto')
export class MarcaDeAutoController {
  constructor(private readonly marcaDeAutoService: MarcaDeAutoService) {}

  @Post()
  create(@Body() createMarcaDeAutoDto: CreateMarcaDeAutoDto) {
    return this.marcaDeAutoService.create(createMarcaDeAutoDto);
  }

  @Get()
  findAll() {
    return this.marcaDeAutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcaDeAutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarcaDeAutoDto: UpdateMarcaDeAutoDto) {
    return this.marcaDeAutoService.update(+id, updateMarcaDeAutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaDeAutoService.remove(+id);
  }
}
