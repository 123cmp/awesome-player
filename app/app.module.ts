import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './components/main/main.component';
import { PlayerComponent }  from './components/main/components/player/player.component';
import { TrackListComponent }  from './components/main/components/trackList/trackList.component';
import { TrackItemComponent }  from './components/main/components/trackList/components/track/trackItem.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainComponent, PlayerComponent, TrackListComponent, TrackItemComponent ],
    bootstrap:    [ MainComponent ]
})
export class AppModule {}