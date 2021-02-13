import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {ItunesSearchServiceService} from '../itunes-search-service.service';
import {Song} from '../song';

@Component({
  selector: 'app-song-detail-page',
  templateUrl: './song-detail-page.component.html',
  styleUrls: ['./song-detail-page.component.scss']
})

export class SongDetailPageComponent implements OnInit {

  selectedSong: Song = new Song();
  navigationState: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private itunesSearchService: ItunesSearchServiceService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.navigationState = this.location.getState();

    if (this.navigationState.navigationId > 1) {
      this.route.params.subscribe(({songId}) => {
        this.searchSongById(songId);
      });
    } else {
      this.goToSearchPage();
    }
  }

  searchSongById(songId: string): void {
    this.loading = true;

    this.itunesSearchService
      .searchBySongId(songId)
      .subscribe(({results}) => {
        this.selectedSong = (results.map((result: any) => new Song(result)) || [])[0];
        this.loading = false;

        if (!this.selectedSong.id) {
          this.goToSearchPage();
        }
      });
  }

  goToSearchPage(): void {
    this.router.navigateByUrl('');
  }

}
