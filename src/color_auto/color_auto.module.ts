import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorAutoController } from './color_auto.controller';
import { ColorAutoService } from './color_auto.service';
import { ColorAuto } from './entities/color_auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColorAuto])],
  controllers: [ColorAutoController],
  providers: [ColorAutoService],
})
export class ColorAutoModule {}
