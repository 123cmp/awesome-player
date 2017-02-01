import { Component } from '@angular/core';

@Component({
    selector: 'add-track',
    moduleId: module.id,
    templateUrl: 'add-track.component.html',
})

export class AddTrackComponent  {
    trackUrl: string;
    addTrack(trackUrl: string): void {
        this.trackUrl = trackUrl;
        console.log(trackUrl);
    }
}