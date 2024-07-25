import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LenguajeDeProgramacion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  lenguajeDeProgramacion: string;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
