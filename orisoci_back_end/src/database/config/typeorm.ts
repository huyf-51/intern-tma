import { DataSource } from 'typeorm';
import { Account } from '../entities/auth.entity';
import { User } from '../entities/user.entity';
import { UserProfile } from '../entities/profile.entity';
import { Message } from '../entities/message.entity';
import { New } from '../entities/new.entity';
import { Story } from '../entities/story.entity';
import { Notification } from '../entities/notification.entity'

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [Account, User, UserProfile, Message, New, Notification, Story],
  synchronize: false,
  logging: true
});

export default AppDataSource