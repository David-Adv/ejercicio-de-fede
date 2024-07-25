import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaDeAuto } from './entities/marca-de-auto.entity';
import { MarcaDeAutoController } from './marca-de-auto.controller';
import { MarcaDeAutoService } from './marca-de-auto.service';

@Module({
  imports: [TypeOrmModule.forFeature([MarcaDeAuto])],
  controllers: [MarcaDeAutoController],
  providers: [MarcaDeAutoService],
})
export class MarcaDeAutoModule {}
