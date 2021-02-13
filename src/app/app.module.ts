import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SongDetailPageComponent } from './song-detail-page/song-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchResultsItemComponent,
    MainHeaderComponent,
    SearchPageComponent,
    SongDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
