import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadComponent } from './components/upload/upload.component';
import { InfoComponent } from './components/info/info.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { ModalComponent } from './components/modal/modal.component';
import { DetailsComponent } from './components/details/details.component';
import { TeamlistComponent } from './components/teamlist/teamlist.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamComponent } from './components/team/team.component';
import { TeamPlayerComponent } from './components/team-player/team-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    InfoComponent,
    SnippetComponent,
    AddteamComponent,
    ModalComponent,
    DetailsComponent,
    TeamlistComponent,
    AddTeamComponent,
    TeamComponent,
    TeamPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
