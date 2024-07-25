import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provincia {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  provincia: string;

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn({ nullable: true })
  delete_at: Date;
}
