import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SeoService } from '../../../shared/services/seo.service';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  items: any = [];
  slug: Observable<string>;
  subscription: Subscription;


  constructor(
    private seo: SeoService,
    private news: NewsService,
    private act: ActivatedRoute,
  ) {
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.subscription = this.slug.subscribe(data => this.getPost(data));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  getPost = (slug: string) => this.items = this.news.PostSlug(slug).
                                            pipe(tap((res) => this.getSeo(res)));

  getSeo = (item: any) => {
    this.seo.updateTags( { title: item.title, description: item.content, image: item.medium } );
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
