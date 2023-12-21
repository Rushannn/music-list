import { Component, Input } from '@angular/core';
import { MusicFile } from 'src/app/core/interfaces/music';
import { AudioControlService } from 'src/app/core/services/audio-control.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent {
  @Input() data: MusicFile[] = [];
  displayedColumns: string[] = ['id', 'name', 'artist'];

  constructor(
    private audioControlService: AudioControlService
  ) { }

  openFile(index: number) {
    this.audioControlService.openFile(index)
  }
}
