import {Injectable} from "@angular/core";
import {TrackCollection} from "./track.collection";
import {TrackModel} from "./track.model";

@Injectable()
export class TrackListService {
    private _tracks: TrackCollection = new TrackCollection();

    get tracks() {
        return this._tracks;
    }

    addTrack(track:TrackModel) {
        this._tracks.push(track);
    }
}