import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './components/main/main.component';
import { PlayerComponent }  from './components/main/components/player/player.component';
import { TrackListComponent }  from './components/main/components/track-list/track-list.component';
import { TrackItemComponent } from "./components/main/components/track-list/track-item/track-item.component";
import { TrackListService } from "./components/main/components/track-list/track-list.service";
import { AddTrackComponent } from "./components/main/components/track-list/add-track/add-track.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainComponent, PlayerComponent, TrackListComponent, TrackItemComponent, AddTrackComponent ],
    bootstrap:    [ MainComponent ],
    providers:    [ TrackListService ]
})
export class AppModule {}