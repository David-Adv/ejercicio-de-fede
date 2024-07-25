import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MarcaDeAuto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  marca_de_auto: string;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
