import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { CloudService } from './cloud.service';
import { StreamState } from '../interfaces/stream-state';

@Injectable({
  providedIn: 'root'
})
export class AudioControlService {
  files: Array<any> = [];
  currentFileIndex: number = 0;
  state!: StreamState;

  constructor(
    private audioService: AudioService,
    private cloudService: CloudService
  ) {
    this.cloudService.getFiles()
      .subscribe(files => {
        this.files = files;
      });

    this.audioService.getState()
      .subscribe(state => {
        this.state = state;
      });
  }

  isFirstPlaying() {
    return this.currentFileIndex === 0;
  }

  isLastPlaying() {
    return this.currentFileIndex === this.files.length - 1;
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
    });
  }

  openFile(index: any) {
    this.currentFileIndex = index;
    this.audioService.stop();
    this.playStream(this.files[index].url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFileIndex + 1;
    this.openFile(index);
  }

  previous() {
    const index = this.currentFileIndex - 1;
    this.openFile(index);
  }

  seekTo(value: number) {
    this.audioService.seekTo(value);
  }
}
