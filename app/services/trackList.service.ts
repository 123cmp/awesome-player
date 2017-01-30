import {TrackModel} from './../models/track.model'
import {TrackCollection} from "../models/track.collection";

export class TrackListService {
    private static _tracks: TrackCollection = new TrackCollection();

    static get tracks() {
        return this._tracks;
    }

    static addTrack(track:TrackModel) {
        this._tracks.push(track);
    }
}