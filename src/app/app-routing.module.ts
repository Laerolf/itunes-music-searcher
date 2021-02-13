import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SearchPageComponent} from './search-page/search-page.component';
import {SongDetailPageComponent} from './song-detail-page/song-detail-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: ':songId', component: SongDetailPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
