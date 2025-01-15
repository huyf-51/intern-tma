import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/database/entities/auth.entity';
import { Connection } from 'src/database/entities/connection.entity';
import { User } from 'src/database/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@Inject('ACCOUNT_REPOSITORY') private accountRepository: Repository<Account>, @Inject('USER_REPOSITORY') private userRepository: Repository<User> , @Inject('DATA_SOURCE') private dataSource: DataSource, @Inject('CONNECTION_REPOSITORY') private connectionRepository: Repository<Connection>) {}

  async sendFriendRequest(requesterAccountID: number, receiverUserID: number) {
    const requestUser = await this.dataSource.createQueryBuilder()
    .select("user.id")
    .from(User, "user")
    .where("user.accountID = :id", { id: requesterAccountID })
    .getOne()
    console.log(requestUser)
    await this.connectionRepository.save({ requesterID: requestUser['id'], receiverID: receiverUserID})
  }
}
