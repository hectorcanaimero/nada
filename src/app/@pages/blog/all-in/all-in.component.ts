import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';

import { BlogService } from '@core/services/blog.service';
import { Post } from '@core/interfaces/blog';

@Component({
  selector: 'app-all-in',
  templateUrl: './all-in.component.html',
  styleUrls: ['./all-in.component.scss']
})
export class AllInComponent implements OnInit {

  id: string = '';
  slug: string = '';
  titulo: string = '';
  totalItems: any = 0;
  currentPage: number = 1;
  itemsPerPage: number = 6;

  isLoading: boolean = false;

  type: any = [];
  slug$: Observable<string>;
  first$: Observable<string>;
  items$: Observable<Post[]>;


  constructor(
    private db: BlogService,
    private act: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.first$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('first')));
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.first$.subscribe(type => this.slug$.subscribe( slug => this.process(type, slug)));
  }


  private process = (type: string, slug: string, page=1) => {
    this.isLoading = true;
    console.log(page);
    this.id = type;
    this.slug = slug;
    if (type === 'categoria') {
      return this.getCategories(slug, page);
    }
    else if (type === 'tag') {
      return this.getTags(slug, page);
    } else {
      return this.getSearch(slug, page);
    }
  }
  getCategories = (slug: string, page?: number) => {
    this.db.getCategoriesSlug(slug).subscribe((type) => {
      this.type = type;
      this.titulo = `Categoria: ${type.name}`;
      this.items$ = this.db.getPostsCategories(type.id, page,this.itemsPerPage).pipe(
        tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]),
        map((res) => res.body),
        finalize(() => this.isLoading = false)
      );
    });
  }
  getTags = (slug: string, page?: number) => {
    this.db.getTagSlug(slug).subscribe((type) => {
      this.type = type;
      this.titulo = `Etiqueta: ${type.name}`;
      this.items$ = this.db.getPostsTags(type.id, this.itemsPerPage).pipe(
        tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]),
        map((res) => res.body),
        finalize(() => this.isLoading = false)
      );
    });
  }

  getSearch(slug: string, page?: number) {
    const text = slug.split('-').join('%20');
    this.items$ = this.db.getPostSearch(text, page).pipe(
      tap((res) => {
        this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4];
        this.titulo = `Resultado da busca por <b>"${ slug }"</b> (${this.totalItems})`;
      }
      ),
      map((res) => res.body),
      finalize(() => this.isLoading = false)
    );
  }

  pageChanged = (ev: any) => {
    this.currentPage = ev++;
    this.process(this.id, this.slug, this.currentPage);
  }

  trackBy = (index: number, item: any) => item[index];
}
