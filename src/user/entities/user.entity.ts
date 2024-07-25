import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tipo } from '../../tipo/entities/tipo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('int', { nullable: false })
  DNI: Number;

  // @Column('int')
  // pais: Number;

  // @Column('int')
  // provincia: Number;

  // @Column('text')
  // localidad: string;

  // @Column('text')
  // direccion: string;

  // @Column('text')
  // Modelo_de_auto: String;

  // @Column('int')
  // MarcaAuto: Number;

  // @Column('int')
  // ColorAuto: Number;

  // @Column('text')
  // Patente_de_auto: string;

  // ACA ESTAMOS
  @ManyToOne(() => Tipo, (tipo) => tipo.usuario)
  @Column('int')
  tipoUsuario: Number;

  // @Column('int')
  // lenguaje_de_Programacion: Number;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
