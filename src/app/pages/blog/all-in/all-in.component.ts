import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/services/news.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-in',
  templateUrl: './all-in.component.html',
  styleUrls: ['./all-in.component.scss']
})
export class AllInComponent implements OnInit {

  p: number = 1;
  ip: number = 6;
  header: any = [];
  slug: Observable<string>;
  first: Observable<string>;
  items: any = [];
  subscription: Subscription;
  nav: boolean = true;
  m: string;

  constructor(
    private news: NewsService,
    private act: ActivatedRoute,
    private router: Router,
    private navigator: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.first = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('first')));
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.first.subscribe(
      first => {
        this.slug.subscribe(
          slug => {
            if (first === 'categoria') {
              return this.Category(slug, this.p);
            } else if (first === 'tag') {
              return this.Tag(slug, this.p);
            } else {
              return this.Search(slug, this.p);
            }
          }
        );
      }
    );
    this.Post(this.p);
    if (!this.navigator.canShare()) {
      this.nav = false;
      return;
    }
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

  Category(slug: string, p: number) {
    this.m = `Resultado da busca por <b>"${slug.split('-').join(' ')}"</b>`;
    this.news.getBlogCollection(`categories?slug=${slug}`).subscribe(
      data => {
        this.news.getBlogCollection(`posts?categories=${data.body[0]['id']}&page=${p}&per_page=${this.ip}`).subscribe(
          res => {
            this.items = res.body;
            this.header = res.headers.keys().map(key => res.headers.get(key))[4];
          }
        );
      },
      err => console.log(err)
    );
  }

  Tag(slug: string, p: number) {
    this.news.getBlogCollection(`tags?slug=${slug}`).subscribe(
      data => {
        this.m = `Resultado da busca por <b>"${slug.split('-').join(' ')}"</b>`;
        this.news.getBlogCollection(`posts?tags=${data.body[0]['id']}&page=${p}&per_page=${this.ip}`).subscribe(
          res => {
            this.items = res.body;
            this.header = res.headers.keys().map(key => res.headers.get(key))[4];
          }
        );
      },
      err => console.log(err)
    );
  }

  Search(slug: string, p: number) {
    const text = slug.split('-').join('%20');
    this.news.getBlogCollection(`posts?search=${text.toLocaleLowerCase()}&page=${p}&per_page=${this.ip}`).subscribe(
      res => {
        this.items = res.body;
        this.header = res.headers.keys().map(key => res.headers.get(key))[4];
        this.m = `Resultado da busca por <b>"${slug.split('-').join(' ')}"</b>`;
      },
      err => console.log(err)
    );
  }

  Post(page: number) {
    this.news.Blog(page, this.ip).subscribe(
      res => {
        this.items = res.body;
        this.header = res.headers.keys().map(key => res.headers.get(key))[4];
      },
      err => console.log(err)
    );
  }

  pageChanged(e: any) {
    this.p = e;
    const url = this.router.url.split('/');
    if (url[2] === 'categoria'){
      this.Category(url[3], this.p);
    } else if (url[2] === 'tag') {
      this.Tag(url[3], this.p);
    } else {
      this.Search(url[3], this.p);
    }
  }
}
