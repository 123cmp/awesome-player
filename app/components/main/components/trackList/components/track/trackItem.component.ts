import { Input, Component } from '@angular/core';

@Component({
    selector: 'track-item',
    moduleId: module.id,
    templateUrl: 'trackItem.component.html',
})

export class TrackItemComponent  {
    @Input() trackInfo;
}