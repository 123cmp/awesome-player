import { Component } from '@angular/core';
import { TrackListService } from './../../../../services/trackList.service';
import {TrackCollection} from "../../../../models/track.collection";

@Component({
    selector: 'track-list',
    moduleId: module.id,
    templateUrl: 'trackList.component.html',
    providers: [TrackListService]
})

export class TrackListComponent  {
    private _tracks: TrackCollection;

    constructor() {
        this._tracks = TrackListService.tracks;
    }

    get tracks(): TrackCollection {
        return this._tracks;
    }

    set tracks(value: TrackCollection) {
        this._tracks = value;
    }
}