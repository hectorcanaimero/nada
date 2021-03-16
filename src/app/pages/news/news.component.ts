import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { SeoService } from 'src/app/shared/services/seo.service';
import { NewsService } from 'src/app/shared/services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit, OnDestroy {

  items: any = [];
  activate: Subscription;
  slug: Observable<string>;

  constructor(
    private seo: SeoService,
    private news: NewsService,
    private act: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('id')));
    this.slug.subscribe(data => this.getPost(`${data}`));
  }

  ngOnDestroy(): void {
    if (this.activate) this.activate.unsubscribe();
  }

  getPost = (id: string) => this.items = this.news.PageSlug(id).pipe(tap((data) => this.getSeo(data)));

  getSeo = (items: any) => {
    this.seo.addCanonical();
    this.seo.updateTags(
      {
        title: items.title,
        description: items.content,
        image: items.medium
      }
    );
    this.seo.dataLayerPage(items.title);
  }
}
