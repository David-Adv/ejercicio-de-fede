import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pais {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  pais: string;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
