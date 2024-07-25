import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ColorAuto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  ColorDeAuto: string;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
