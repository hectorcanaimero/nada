import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';

import { Page } from '@core/interfaces/news';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  isLoading: boolean = false;
  items$: Observable<Page>;
  slug$: Observable<string>;

  constructor(
    private seo: SeoService,
    private news: NewsService,
    private act: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('id')));
    this.slug$.subscribe(data => this.getPost(`${data}`));
  }

  private getPost = (id: string) => {
    this.isLoading = true;
    this.items$ = this.news.PageSlug(id).pipe(
      tap((res) => {
        this.seo.addCanonical();
        this.seo.updateTags( { title: res.title, image: res.medium, description: res.content } );
        this.seo.dataLayerPage(res.title);
      }),
      finalize(() => this.isLoading = false)
    );
  }
}
