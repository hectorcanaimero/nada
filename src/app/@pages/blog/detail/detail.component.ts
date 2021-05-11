import { BlogService } from '@core/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SeoService } from '@core/services/seo.service';
import { Post } from '@core/interfaces/blog';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  slug$: Observable<string>;
  items$: Observable<Post>;

  constructor(
    private db: BlogService,
    private seo: SeoService,
    private act: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.getPost(data));
  }

  getPost = (slug: string) => {
    this.items$ = this.db.getPostSlug(slug).pipe(delay(1000));
  }

  getSeo = (item: any) => {
    this.seo.updateTags( { title: item.title, description: item.content, image: item.medium } );
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
