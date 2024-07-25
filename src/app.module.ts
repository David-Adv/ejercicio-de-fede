import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorAutoModule } from './color_auto/color_auto.module';
import { typeORM } from './config/typeORM';
import { MarcaDeAutoModule } from './marca-de-auto/marca-de-auto.module';
import { PaisModule } from './pais/pais.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { TipoModule } from './tipo/tipo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    UserModule,
    TipoModule,
    ColorAutoModule,
    PaisModule,
    ProvinciaModule,
    MarcaDeAutoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
