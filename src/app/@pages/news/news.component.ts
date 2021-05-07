import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take, tap, delay } from 'rxjs/operators';

import { SeoService } from 'src/app/shared/services/seo.service';
import { NewsService } from 'src/app/shared/services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  items: any = [];
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

  private getPost = (id: string) => this.items = this.news.PageSlug(id).pipe(
    tap((res) => {
      this.seo.addCanonical();
      this.seo.updateTags( { title: res.title, image: res.medium, description: res.content } );
      this.seo.dataLayerPage(res.title);
    }),
    delay(1000)
  );
}
