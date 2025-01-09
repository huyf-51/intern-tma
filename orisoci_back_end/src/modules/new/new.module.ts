import { Module } from '@nestjs/common';
import { NewService } from './new.service';

@Module({
  providers: [NewService],
})
export class NewModule {}
