import { Inject, Injectable } from '@nestjs/common';
import { UserProfile } from 'src/database/entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(@Inject('USER_PROFILE_REPOSITORY') private userProfileRepository: Repository<UserProfile>) {}

    async getProfile(id: number) {
        return await this.userProfileRepository.findOne({ where: { userID: id }})
    }
}
