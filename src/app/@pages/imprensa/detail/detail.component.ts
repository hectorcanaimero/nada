import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  items$: any = [];
  slug$: Observable<string>;


  constructor(
    private seo: SeoService,
    private news: NewsService,
    private act: ActivatedRoute,
  ) {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.getPost(data));
  }

  ngOnInit(): void {}

  getPost = (slug: string) => {
    this.items$ = this.news.PostSlug(slug).pipe(
      tap((res) => this.setSeo(res)),
      delay(1000)
    );
  }

  private setSeo = (item: any) => {
    this.seo.updateTags( { title: item.title, description: item.content, image: item.medium } );
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
