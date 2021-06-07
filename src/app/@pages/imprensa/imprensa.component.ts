import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-imprensa',
  templateUrl: './imprensa.component.html',
  styleUrls: ['./imprensa.component.scss']
})

export class ImprensaComponent implements OnInit {

  p: number = 1;
  ip: number = 6;
  isLoading: boolean = false;
  public header: any;
  items$: Observable<any>;

  constructor(
    private seo: SeoService,
    private news: NewsService,
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.seo.dataLayerPage('imprensa');
    this.getPost(this.p)
  }

  getPost = (page: number) => {
    this.isLoading = true;
    this.items$ = this.news.Posts(page, this.ip).pipe(
      tap((res) => this.header = res?.headers.keys().map(key => res.headers.get(key))[4]),
      map((res) => res.body),
      finalize(() => this.isLoading = false)
    );
  }

  pageChanged = (ev: any) => {
    this.p = ev;
    this.items$ = this.news.Posts(this.p, this.ip).pipe(map((res) => res.body));
  }

  trackBy = (index: number, item: any) => item[index];
}
