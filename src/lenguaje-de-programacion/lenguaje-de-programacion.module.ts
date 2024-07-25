import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LenguajeDeProgramacion } from './entities/lenguaje-de-programacion.entity';
import { LenguajeDeProgramacionController } from './lenguaje-de-programacion.controller';
import { LenguajeDeProgramacionService } from './lenguaje-de-programacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([LenguajeDeProgramacion])],
  controllers: [LenguajeDeProgramacionController],
  providers: [LenguajeDeProgramacionService],
})
export class LenguajeDeProgramacionModule {}
