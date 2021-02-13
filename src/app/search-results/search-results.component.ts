import {Component, Input, OnInit} from '@angular/core';

import {Song} from '../song';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  @Input() searchKey: string;
  @Input() searchResults: Song[];
  @Input() amountOfResults: number;
  @Input() loading: boolean;

  constructor() {
    this.searchKey = '';
    this.searchResults = [];
    this.amountOfResults = 0;
    this.loading = false;
  }

  ngOnInit(): void {}

  get hasSearchKey(): boolean {
    return this.searchKey ? !!this.searchKey.length : false;
  }

  get hasSearchResults(): boolean {
    return !!this.searchResults.length;
  }

  get hasOneResult(): boolean {
    return this.amountOfResults === 1;
  }

  get searchResultsMessage(): string {
    return `${this.amountOfResults} search result${this.hasOneResult ? '' : 's'} found for '${this.searchKey}'`;
  }

  trackSong(index: number, {id}: Song): string {
    return `${id}-${index}`;
  }

}
