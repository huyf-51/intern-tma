import { IsNumber } from "class-validator";

export class SendFriendDto {
    @IsNumber()
    userID: number
}