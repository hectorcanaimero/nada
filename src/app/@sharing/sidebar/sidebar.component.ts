import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NewsService } from '@core/services/news.service';
import { Page } from '@core/interfaces/news';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items$: Observable<any>;
  noticias$: Observable<Page[]>;

  constructor( private news: NewsService ) { }

  ngOnInit(): void {
    this.items$ = this.news.PageCollection(`?include[]=97&include[]=104`);
    this.noticias$ = this.news.LastNews(5);
  }

  trackById = (index: number, items: any) => items[index];
}
