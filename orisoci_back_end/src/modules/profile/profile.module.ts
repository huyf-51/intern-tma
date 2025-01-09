import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DatabaseModule } from '../database/database.module';
import { DataSource } from 'typeorm';
import { UserProfile } from 'src/database/entities/profile.entity';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, {
    provide: 'USER_PROFILE_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(UserProfile)
    },
    inject: ['DATA_SOURCE']
  }],
  imports: [DatabaseModule]
})
export class ProfileModule {}
