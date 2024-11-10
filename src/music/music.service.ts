import { Injectable } from '@nestjs/common';
import { MusicModel } from './music.model';

@Injectable()
export class MusicService {
    private music: MusicModel[] = [];
    constructor(){
        let music = {
            id:1,
            name: "November rain",
            artist: "Guns n´roses",
            album: "Use Your Illusion I",
            anio: 1991,
        };
        
        this.music.push (music);
        

    } 

    addMusic(music: MusicModel){
        this.music.push(music);
        return music
    }
    getMusic(){
        return this.music;
    }
    getMusicByName(name: string){
        return this.music.find(music => music.name === name ) || null;
    }
    getMusicByArtist(artist: string){
        return this.music.filter(music => music.artist === artist);
    }
    updateMusic(id: number, updatedMusic: MusicModel){
        const index = this.music.findIndex( music => music.id === id);
        if (index !== -1){
        this.music[index] = updatedMusic;
        return updatedMusic;
        }
        return null;
    }
    deleteMusic(id:number){
    const index= this.music.findIndex( music => music.id === id);
    if (index !== -1){
        this.music.splice (index, 1);
        return 'Canción con id ${id} eliminada.' ;
        }
        return 'Canción con id ${id} no encontrada.' ;
    }
    getMusicById (id: number){
        return this.music.find(music => music.id === id) || null;
        }
}
