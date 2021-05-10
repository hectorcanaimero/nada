import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SeoService } from '../../../shared/services/seo.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  nav: boolean = true;
  slug: Observable<string>;
  items: any = [];
  relations: any = [];
  constructor(
    private news: NewsService,
    private seo: SeoService,
    private act: ActivatedRoute,
    private navigator: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => this.Post(data));
    if (!this.navigator.canShare()) {
      this.nav = false;
      return;
    }
  }

  Post(slug: string) {
    this.news.getBlogCollection(`posts?slug=${slug}`).subscribe(
      res => {
        this.items = res.body[0];
        this.getSeo(res.body[0]);
        this.Relacionado(res.body[0]['tags'][0]['term_id'], 4);
      }
    );
  }

  Relacionado(tag: any, limit: number) {
    this.news.getBlogCollection(`posts?tags=${tag}&per_page=${limit}`).subscribe(
      res => {
        this.relations = res.body;
      }
    );
  }
  share(i: any) {
    this.navigator.share({
      title: i.title,
      text: '',
      url: `https://www.condor.com.br/blog/${i.slug}`
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  getSeo = (item: any) => {
    this.seo.updateTags( { title: item.title, description: item.content, image: item.medium } );
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
