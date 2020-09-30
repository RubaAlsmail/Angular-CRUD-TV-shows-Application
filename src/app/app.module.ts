import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TVSHOWSComponent } from './tvshows/tvshows.component';
import { TvShowComponent } from './tvshows/tv-show/tv-show.component';
import { TvShowListComponent } from './tvshows/tv-show-list/tv-show-list.component';
import { TvshowService } from './shared/tvshow.service';

@NgModule({
  declarations: [
    AppComponent,
    TVSHOWSComponent,
    TvShowComponent,
    TvShowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
