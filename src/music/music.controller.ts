import { Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { MusicService } from './music.service';
import{MusicModel} from './music.model';
import { title } from 'process';
 

@Controller('music')
export class MusicController {
    constructor(private readonly MusicService: MusicService){}
    @Post () 
    create(@Body () newmusic: MusicModel) {
        return this.MusicService.addMusic(newmusic);
    }
    @Get ()
    findAll(){
        return this.MusicService.getMusic();
    }
    @Get ('id')
    findOne(@Param('id') id: string) {
        return this.MusicService.getMusicById(+id);
    }
    @Put(':id')
    update(@Param('id') id:string, @Body() updateMusic: MusicModel){
    return this.MusicService.updateMusic(+id, updateMusic);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
    return this.MusicService.deleteMusic(+id);
    }
    @Get('artist/:artist')
    findByArtist(@Param('artist') artist: string) {
    return this.MusicService.getMusicByArtist(artist);
    }
    @Get('name/:name')
    findByTitle (@Param ('name') name:string) {
    return this.MusicService.getMusicByName(name);
    }
}
