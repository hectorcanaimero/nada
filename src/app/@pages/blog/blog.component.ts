import { Component, OnInit, } from '@angular/core';

import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { BlogService } from '@core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  isLoading: boolean = false;
  items$: Observable<any>;

  constructor(
    private seo: SeoService,
    private db: BlogService
  ) { }

  ngOnInit(): void {
    this.getSeo();
    this.isLoading = true;
    this.items$ = this.db.getPosts(1, 6).pipe(finalize(() => this.isLoading = false));
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
}

