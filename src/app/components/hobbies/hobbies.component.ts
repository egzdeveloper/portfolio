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
        id: 'gone-away',
        src: './../../../assets/images/gone-away.webp',
        name: 'Gone Away',
        artist: 'The Offspring',
        songUrl:
          'https://open.spotify.com/track/5BnFZLH99sYav2cxJFGO2n?si=9f0c10bf0ad84bd8',
        artistUrl:
          'https://open.spotify.com/artist/5LfGQac0EIXyAN8aUwmNAQ?si=lKWZAQeSTJyWz2KGnPTfvQ',
        color: 'background-color: #506828',
        alt: 'Ixnay On The Hombre cover',
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
        id: 'one-step-closer',
        src: './../../../assets/images/one-step-closer.webp',
        name: 'One Step Closer',
        artist: 'Linkin Park',
        songUrl:
          'https://open.spotify.com/track/3K4HG9evC7dg3N0R9cYqk4?si=ca55d0aa852649d2',
        artistUrl:
          'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=Bf5IKq9hQpa8aHkw-pCbMw',
        color: 'background-color: #777772',
        alt: "Hybrid Theory cover",
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
