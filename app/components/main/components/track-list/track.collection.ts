import {TrackModel} from "./track.model";

export class TrackCollection implements Iterable<TrackModel> {
    private _tracks: TrackModel[] = [];

    constructor(tracks: TrackModel[] = []) {
        this._tracks = this._tracks.concat(tracks);
        for(let some of this) {
            console.log(some);
        }
    }

    push(track: TrackModel) {
        this._tracks.push(track);
    }

    [Symbol.iterator]() {

        let pointer = 0;
        let tracks = this._tracks;

        return {
            next(): IteratorResult<TrackModel> {
                if (pointer < tracks.length) {
                    return {
                        done: false,
                        value: tracks[pointer++]
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }

    }

    at(index: number) {
        return this._tracks[index];
    }
}