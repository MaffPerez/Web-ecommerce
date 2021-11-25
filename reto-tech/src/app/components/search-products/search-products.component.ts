import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.sass']
})
export class SearchProductsComponent implements AfterViewInit {

  @Output()
  searchEmitter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const search = document.getElementById('search')!;
    const keyup = fromEvent(search, 'keyup');
    keyup.pipe(
      map((e:any) => e.currentTarget.value),
      debounceTime(400)
    ).subscribe(res => this.searchEmitter.emit(res));
  }

}
