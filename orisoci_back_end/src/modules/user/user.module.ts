import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DataSource } from 'typeorm';
import { User } from 'src/database/entities/user.entity';
import { DatabaseModule } from '../database/database.module';
import { Account } from 'src/database/entities/auth.entity';
import databaseProvider from '../database/database.provider';
import { Connection } from 'src/database/entities/connection.entity';

@Module({
  providers: [UserService, {
      provide: 'ACCOUNT_REPOSITORY',
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(Account)
      },
      inject: ['DATA_SOURCE']
    }, {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(User)
      },
      inject: ['DATA_SOURCE']
    }, databaseProvider, {
      provide: 'CONNECTION_REPOSITORY',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(Connection)
      },
      inject: ['DATA_SOURCE']
    }],
  controllers: [UserController],
  exports: [UserService],
  imports: [DatabaseModule]
})
export class UserModule {}
