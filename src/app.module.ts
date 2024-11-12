import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './users/users.controller';
import { UsuariosService } from './users/users.service';
import { MusicService } from './music/music.service';
import { MusicController } from './music/music.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, MusicController],
  providers: [AppService, UsuariosService, MusicService],
})
export class AppModule {}
