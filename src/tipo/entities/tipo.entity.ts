import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('tipo')
export class Tipo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  tipoUsuario: string;

  @OneToMany(() => User, (usuario) => usuario.tipoUsuario)
  usuario: User[];

  @CreateDateColumn()
  crate_at: Date;

  @DeleteDateColumn()
  delete_at: Date;
}
