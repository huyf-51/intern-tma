import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('News')
export class New {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  postNewUserID: number;
}
