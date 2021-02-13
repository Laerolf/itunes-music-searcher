export class Song {

  id: string;

  artistName: string;
  name: string;
  imageUrl: string;
  previewUrl: string;

  constructor(jsonSong: any = {}) {
    const {trackId, artistName, trackName, artworkUrl100, previewUrl} = jsonSong;

    this.id = trackId;
    this.artistName = artistName;
    this.name = trackName;
    this.imageUrl = artworkUrl100;
    this.previewUrl = previewUrl;
  }

}
