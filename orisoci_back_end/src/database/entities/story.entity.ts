import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Stories')
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  postStoryUserID: number;
}
