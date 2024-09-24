/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-21
 * @description 
 * 2.Digital Age
 *  ● A Video has the following methods and properties
 *      ○ title (a string)
 *      ○ seconds (a number)
 *      ○ watch(x seconds [optional]) prints "You watched X seconds of 'TITLE'" e.g. "You watched
 *          120 seconds of 'Lord of the rings'". If x is missing prints "You watched all SECONDS seconds 
 *          of 'TITLE'" e.g. "You watched all 160 seconds of 'Lord of the rings'"
 *  ● A MusicVideo extends Video and has these extra methods and properties
 *      ○ artist (a string)
 *      ○ play() prints "You played 'TITLE' by 'ARTIST'" e.g. "You played 'Another Brick in the Wall' by 
 *          'Pink Floyd'"
 */

class Video {
    constructor(title, seconds, secondsWatch = 0) {
        this.title = title;
        this.seconds = seconds;
        this.secondsWatch = secondsWatch;
    }

    watch() {
        // Check if the `secondsWatch` is <= to `seconds`
        if (this.secondsWatch <= this.seconds) {
            // Calculate the time watch of the video
            let timeWatch = this.seconds - this.secondsWatch;
            // Return if the video is not watch all
            if (this.secondsWatch == 0) {
                return `Non hai guardato il video!`;
                // Return if the video is watch all
            } else if (timeWatch == 0) {
                return `Hai guardato tutto il video!`;
            } else {
                // Return the seconds missed
                return `Ti mancano ${timeWatch} secondi per finire il video!`;
            }
        } else {
            return `Tempo di visualizzazione superiore al video!`;
        }
    }

}

console.log('---------------');
console.log('|    VIDEO    |');
console.log('---------------');
// Use of the class Video
let video1 = new Video("Viva el footbal", 120);
let video2 = new Video("Saluto", 30, 30);
let video3 = new Video("Calcio con la F", 21, 10);

// Output of the class Video
console.log(video1.watch());
console.log(video2.watch());
console.log(video3.watch());

console.log('-----------------');
console.log('|  MUSIC VIDEO  |');
console.log('-----------------');

class MusicVideo extends Video {
    constructor(title, artist) {
        super(title);
        this.artist = artist;
    }
    play() {
        return `Stai ascoltando '${this.title}' di ${this.artist}!`;
    }
}

// Use of the class musicVideo
let musicVideo = new MusicVideo('Viva el footbal', 'Lele');
// Output of the class musicVideo
console.log(musicVideo.play());
