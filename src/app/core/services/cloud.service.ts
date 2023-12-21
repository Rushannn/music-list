import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MusicFile } from '../interfaces/music';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: MusicFile[] = [
    {
      id: 1,
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: "Ed Sheeran"
    },
    {
      id: 2,
      url:
        "https://ia601009.us.archive.org/8/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Imagine_Dragons_-_Thunder%5BListenVid.com%5D.mp3",
      name: "Thunder",
      artist: "Imagine_Dragons"
    },
    {
      id: 3,
      url:
        "https://ia601009.us.archive.org/8/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Camila_Cabello_-_Havana_Audio_ft_Young_Thug%5BListenVid.com%5D.mp3",
      name: "Havana_Audio_ft_Young_Thug",
      artist: "Camila_Cabello"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}
