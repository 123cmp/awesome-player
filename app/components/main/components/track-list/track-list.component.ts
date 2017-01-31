import {Component} from '@angular/core';
import {TrackCollection} from "./track.collection";
import {TrackListService} from "./track-list.service";

@Component({
    selector: 'track-list',
    moduleId: module.id,
    templateUrl: 'track-list.component.html',
})

export class TrackListComponent  {
    private _tracks: TrackCollection;

    constructor(trackListService: TrackListService) {
        this._tracks = trackListService.tracks;
    }

    get tracks(): TrackCollection {
        return this._tracks;
    }

    set tracks(value: TrackCollection) {
        this._tracks = value;
    }
}