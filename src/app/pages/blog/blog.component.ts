import { Component, OnInit, } from '@angular/core';

import { Subscription } from 'rxjs';

import { SeoService } from '../../shared/services/seo.service';
import { NewsService } from '../../shared/services/news.service';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  p: number = 1;
  ip: number = 6;
  header: any = [];
  items: any = [];
  subscription: Subscription;
  nav: boolean = true;

  constructor(
    private seo: SeoService,
    private news: NewsService,
    private navigator: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.getSeo();
    this.Post(this.p);
    if (!this.navigator.canShare()) this.nav = false;
  }



  Post = (page: number) => {
    this.news.Blog(page, this.ip).subscribe( res => {
      this.items = res.body;
      this.header = res.headers.keys().map(key => res.headers.get(key))[4];
    });
  }

    private getSeo = () => {
      this.seo.addCanonical();
      this.seo.updateTags( {
        title: 'Blog Condor | Receitas, Dicas de Economia e Muito Mais',
        description: 'Confira no Blog Condor: Receitas para seu Dia a Dia, Dicas de Economia, Limpeza, Decoração e Mais',
        image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
      });
      this.seo.dataLayerPage('Blog');
    }

    pageChanged = (e: any) => {
      this.p = e;
      this.news.Blog(this.p, this.ip).subscribe((res) => this.items = res.body);
    }

    /** Share to Mobile */
    share = (i: any) => this.navigator.share({ title: i.title, text: '', url: `https://www.condor.com.br/blog/${i.slug}` }).then( () => {})
}

