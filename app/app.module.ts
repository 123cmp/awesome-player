import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './components/main/main.component';
import { PlayerComponent }  from './components/main/components/player/player.component';
import { TrackListComponent }  from './components/main/components/trackList/trackList.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainComponent, PlayerComponent, TrackListComponent ],
    bootstrap:    [ MainComponent ]
})
export class AppModule {}