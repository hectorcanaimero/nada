import { SeoService } from 'src/app/shared/services/seo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';

import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-imprensa',
  templateUrl: './imprensa.component.html',
  styleUrls: ['./imprensa.component.scss']
})

export class ImprensaComponent implements OnInit {

  public header: number = 0;
  p: number = 1;
  ip: number = 6;
  subscription: Subscription;
  items: Observable<any>;

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
    this.items = this.news.Posts(page, this.ip).pipe(
      debounceTime(400),
      tap((res) => this.header = res.headers.keys().map(key => res.headers.get(key))[4]),
      map((res) => res.body),
    );
  }

  pageChanged = (e: any) => {
    this.p = e;
    this.items = this.news.Posts(this.p, this.ip).pipe(map((res) => res.body));
  }
}
