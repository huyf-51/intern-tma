import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  type: string;

  @Column()
  receiverID: number;
}
