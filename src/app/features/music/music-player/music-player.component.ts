import { Component } from '@angular/core';
import { MatSliderDragEvent } from '@angular/material/slider';
import { StreamState } from 'src/app/core/interfaces/stream-state';
import { AudioControlService } from 'src/app/core/services/audio-control.service';
import { AudioService } from 'src/app/core/services/audio.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class PlayerComponent {
  state!: StreamState;

  constructor(
    private audioService: AudioService,
    private audioControlService: AudioControlService
  ) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  isFirstPlaying() {
    return this.audioControlService.isFirstPlaying();
  }

  isLastPlaying() {
    return this.audioControlService.isLastPlaying();
  }

  pause() {
    this.audioControlService.pause();
  }

  play() {
    this.audioControlService.play();
  }

  stop() {
    this.audioControlService.stop();
  }

  next() {
    this.audioControlService.next();
  }

  previous() {
    this.audioControlService.previous();
  }

  onSliderChangeEnd(change: MatSliderDragEvent) {
    this.audioControlService.seekTo(change.value);
  }
}
