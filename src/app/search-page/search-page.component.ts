import {Component, OnInit} from '@angular/core';

import {ItunesSearchServiceService} from '../itunes-search-service.service';
import {Song} from '../song';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  searchString: string;
  amountOfSearchResults: number;
  searchResults: Song[];

  loading = false;

  constructor(private itunesSearchService: ItunesSearchServiceService) {
    this.searchString = '';
    this.amountOfSearchResults = 0;
    this.searchResults = [];
  }

  ngOnInit(): void {}

  search(newSearchKey: string): void {

    if (!newSearchKey || !newSearchKey.length) {
      this.searchResults = [];
      this.amountOfSearchResults = 0;
    } else {
      this.loading = true;

      this.itunesSearchService
        .searchByKeyWord(newSearchKey)
        .subscribe(({resultCount, results}) => {
          this.searchResults = results.map((result: any) => new Song(result)) || [];
          this.amountOfSearchResults = resultCount;
          this.loading = false;
        });
    }

  }

}
