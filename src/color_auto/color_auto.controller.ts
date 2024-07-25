import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ColorAutoService } from './color_auto.service';
import { CreateColorAutoDto } from './dto/create-color_auto.dto';
import { UpdateColorAutoDto } from './dto/update-color_auto.dto';
@ApiTags('color_auto')
// @ApiBearerAuth()
@Controller('color-auto')
export class ColorAutoController {
  constructor(private readonly colorAutoService: ColorAutoService) {}

  @Post()
  create(@Body() createColorAutoDto: CreateColorAutoDto) {
    return this.colorAutoService.create(createColorAutoDto);
  }

  @Get()
  findAll() {
    return this.colorAutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorAutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorAutoDto: UpdateColorAutoDto) {
    return this.colorAutoService.update(+id, updateColorAutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorAutoService.remove(+id);
  }
}
