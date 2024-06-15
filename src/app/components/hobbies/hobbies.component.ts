import { Component } from '@angular/core';

interface Song {
  id: string;
  name: string;
  artist: string;
  songUrl: string;
  artistUrl: string;
  color: string;
  alt: string;
  src: string;
  playing: boolean;
}

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  playlist: Song[] = [];
  audio = new Audio();

  constructor() {
    this.playlist = [
      {
        id: 'high-hopes',
        src: './../../../assets/images/high-hopes.webp',
        name: 'High Hopes',
        artist: 'Pink Floyd',
        songUrl:
          'https://open.spotify.com/track/236mI0lz8JdQjlmijARSwY?si=3337eff6a2874f93',
        artistUrl:
          'https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9?si=xv6V2PAtTRmVrX8Uvo6kDw',
        color: 'background-color: #2068A8',
        alt: 'The Division Bell cover',
        playing: false
      },
      {
        id: 'the-pot',
        src: './../../../assets/images/the-pot.webp',
        name: 'The Pot',
        artist: 'TOOL',
        songUrl:
          'https://open.spotify.com/track/6vvy5pRjQOXeigpYE2TDbZ?si=6785fde16d7a4aff',
        artistUrl:
          'https://open.spotify.com/artist/3grvcGPaLhfrD5CYsecr4j?si=i8Iv7-VMTFe44Jh9vyF5pQ',
        color: 'background-color: #262643',
        alt: '10,000 Days cover',
        playing: false
      },
      {
        id: 'free-bird',
        src: './../../../assets/images/free-bird.webp',
        name: 'Free Bird',
        artist: 'Lynyrd Skynyrd',
        songUrl:
          'https://open.spotify.com/track/5EWPGh7jbTNO2wakv8LjUI?si=7c0d41e634a24ae1',
        artistUrl:
          'https://open.spotify.com/artist/4MVyzYMgTwdP7Z49wAZHx0?si=OgW0XAsHSxePPxYEx2Ddcg',
        color: 'background-color: #587898',
        alt: "Pronounced 'Leh-Nerd Skin-Nerd' cover",
        playing: false
      },
      {
        id: 'feel-good',
        src: './../../../assets/images/feel-good.webp',
        name: 'Feel Good Inc.',
        artist: 'Gorillaz',
        songUrl:
          'https://open.spotify.com/track/0d28khcov6AiegSCpG5TuT?si=3857764ffde24567',
        artistUrl:
          'https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ?si=BUmBXv8yTFm3o2lTgoSQWA',
        color: 'background-color: #A04848',
        alt: "Demon days cover",
        playing: false
      },
      {
        id: 'kryptonite',
        src: './../../../assets/images/kryptonite.webp',
        name: 'Kryptonite',
        artist: '3 Doors Down',
        songUrl:
          'https://open.spotify.com/track/6ZOBP3NvffbU4SZcrnt1k6?si=2c7425d715d0492f',
        artistUrl:
          'https://open.spotify.com/artist/2RTUTCvo6onsAnheUk3aL9?si=aw5X3whURGOT2zH3rC02iw',
        color: 'background-color: #506828',
        alt: "The Better Life cover",
        playing: false
      }
    ];
  }

  play(song: Song) {
    this.audio.src = './../../../assets/sounds/' + song.id + '.mp3';


    for (let song of this.playlist) {
      song.playing = false;
    }

    song.playing = true;
    this.audio.play();
  }

  stop(song: Song) {
    song.playing = false;
    this.audio.pause();
  }
}
