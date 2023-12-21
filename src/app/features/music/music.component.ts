import { Component } from '@angular/core';
import { CloudService } from 'src/app/core/services/cloud.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  files: Array<any> = [];

  constructor(
    private cloudService: CloudService
  ) {
    this.cloudService.getFiles()
      .subscribe(files => {
        this.files = files;
      });
  }

}
