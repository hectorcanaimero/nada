import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, delay, finalize } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  items$: any = [];
  isLoading: boolean = false;
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
    this.isLoading = true;
    this.items$ = this.news.PostSlug(slug).pipe(
      tap((res) => this.setSeo(res)),
      finalize(() => this.isLoading = false)
    );
  }

  private setSeo = (item: any) => {
    this.seo.updateTags( { title: item.title, description: item.content, image: item.medium } );
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
