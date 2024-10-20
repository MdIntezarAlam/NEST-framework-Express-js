import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UsersModule, TweetModule], //import all created module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
