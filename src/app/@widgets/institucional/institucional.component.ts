import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '@core/interfaces/blog';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-widget-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent implements OnInit {

  items$: Observable<Page>

  constructor( private db: NewsService ) { }
  ngOnInit(): void {
    const q = `?include[]=5&include[]=10&include[]=12&include[]=14`;
    this.items$ = this.db.PageCollection(q);
  }

  trackByFunction = (index: number, items: Page) => items[index];
}
