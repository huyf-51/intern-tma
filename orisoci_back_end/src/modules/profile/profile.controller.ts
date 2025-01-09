import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}
    @Get('/:userID')
    @UseGuards(AuthGuard)
    async getProfile(@Param('userID', ParseIntPipe) params: any) {
        return await this.profileService.getProfile(params)
    }
}
