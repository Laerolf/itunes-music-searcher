import {Component, Input, OnInit} from '@angular/core';

import {Song} from '../song';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss']
})

export class SearchResultsItemComponent implements OnInit {

  @Input() song: Song = new Song();

  constructor() {}

  ngOnInit(): void {}

  get hasSong(): boolean {
    return !!this.song.id;
  }

}
