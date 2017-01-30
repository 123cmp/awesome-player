import {TrackModel} from "./track.model";

export class TrackCollection {
    private tracks: TrackModel[] = [];

    constructor(tracks: TrackModel[] = []) {
        this.tracks = this.tracks.concat(tracks)
    }

    push(track: TrackModel) {
        this.tracks.push(track);
    }

    get(index: number) {
        return this.tracks[index];
    }
}