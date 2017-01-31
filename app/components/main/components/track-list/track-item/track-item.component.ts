import { Input, Component } from '@angular/core';
import { TrackModel } from "../track.model";

@Component({
    selector: 'track-item',
    moduleId: module.id,
    templateUrl: 'track-item.component.html',
})

export class TrackItemComponent  {
    @Input() trackInfo: TrackModel;
}