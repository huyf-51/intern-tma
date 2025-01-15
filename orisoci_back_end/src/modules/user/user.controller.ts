import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { SendFriendDto } from './dto/send-friend.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/friend/invite') 
    @UseGuards(AuthGuard)
    async sendFriendRequest(@Req() req, @Body(new ValidationPipe()) user: SendFriendDto) {
        await this.userService.sendFriendRequest(req.accountID.id, user.userID)
        return 'send friend success'
    }
}
