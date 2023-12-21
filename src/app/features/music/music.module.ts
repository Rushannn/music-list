import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { PlayerComponent } from './music-player/music-player.component';
import { MusicListComponent } from './music-list/music-list.component';



@NgModule({
  declarations: [
    MusicComponent,
    PlayerComponent,
    MusicListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class MusicModule { }
