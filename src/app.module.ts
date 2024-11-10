import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MusicService } from './music/music.service';
import { MusicController } from './music/music.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, MusicController],
  providers: [AppService, UsersService, MusicService],
})
export class AppModule {}
