import { Inject, Injectable } from '@nestjs/common';
import { UserProfile } from 'src/database/entities/profile.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(@Inject('USER_PROFILE_REPOSITORY') private userProfileRepository: Repository<UserProfile>, @Inject('DATA_SOURCE') private dataSource: DataSource) {}

    async getProfile(id: number) {
        return await this.dataSource.getRepository(UserProfile).createQueryBuilder('profile').where("profile.userID = :id", {id: id}).getOne();
    }
}
