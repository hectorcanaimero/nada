import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { tap, map, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Imagens, Page, Campanha, Loja, Materia, Tabloide, Lojas } from '@core/interfaces/news';

const url: string = environment.news.url;
const headers = new HttpHeaders({Authorization: `${ environment.news.key }`});
const urlBlog: string = environment.blog.url;
const headersBlog = new HttpHeaders({Authorization: `${ environment.blog.key }`});

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private loja$: BehaviorSubject<Lojas[]> = new BehaviorSubject(null);
  private region$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private banner$: BehaviorSubject<Imagens[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }


  // Banners
  setBanners$  = (items: Imagens[]) => this.banner$.next(items);
  getBanners$  = (): Observable<Imagens[]> => this.banner$.asObservable();
  getBanners  = (): Observable<Imagens[]> =>  {
    return this.http.get<Imagens[]>(`${ url }/imagens?per_page=100`).pipe(tap((data) => this.setBanners$(data)));
  }

  // Cidade
  setRegion$  = (items: any[]) => this.region$.next(items);
  getRegion$  = (): Observable<any[]> => this.region$.asObservable();
  getRegion  = (): Observable<any[]> => {
    return this.http.get<any[]>(`${url}/region`, { params: { per_page: `100` }})
      .pipe(tap((data) => this.setRegion$(data)));
  }

  // Loja
  setLoja$  = (items: Lojas[]) => this.loja$.next(items);
  getLoja$  = (): Observable<Lojas[]> => this.loja$.asObservable();
  getLoja  = (): Observable<Lojas[]> =>  {
    return this.http.get<Lojas[]>(`${url}/loja?per_page=100`).pipe(tap((data) => this.setLoja$(data)));
  }

  getSelector = () => {
    return forkJoin(
      {
        region: this.http.get<any[]>(`${url}/region?per_page=100`),
        lojas: this.http.get<any[]>(`${url}/loja?per_page=100`)
      }
    );
  }

  getImage(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${url}/media/${id}`, { headers });
  }

  /** Module Page */
  Page(): Observable<Page[]> {
    return this.http.get<Page[]>(`${url}/pages`);
  }

  LastNews(limit: number): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${url}/posts`).pipe(map((data) => data['slice'](0, limit)));
  }

  PageCollection(collection: string): Observable<Page> {
    return this.http.get<Page>(`${url}/pages${collection}`);
  }

  PageSlug = (slug: string): Observable<Page> => {
    return this.http.get<Page>(`${url}/pages?slug=slug}`).pipe(map((res) => res[0]));
  }

  PageId(id: number): Observable<Page[]> {
    return this.http.get<Page[]>(`${url}/pages/${id}`);
  }

  /** Module Imagens */
  ImagensPosition(position: string): Observable<Imagens[]> {
    return this.http.get<Imagens[]>(`${url}/imagens`, { params: { position }, headers })
    .pipe(
      map(res => res.filter(row => row.status === 'publish' || row.position == position))
    );
  }


  /** Module Campanha */
  Campanha(slug: string): Observable<Campanha[]> {
    return this.http.get<Campanha[]>(`${url}/posto?slug=${slug}`);
  }

  /** Module Loja */
  Lojas = (limit: number): Observable<Loja> => this.http.get<Loja>(`${url}/loja`, { params: { per_page: `${limit}` }, headers }).pipe(map(data => data));
  LojaId = (id: number): Observable<Lojas> => this.http.get<Lojas>(`${url}/loja/${id}`).pipe(map(data => data));
  LojaSlug = (slug: string): Observable<Lojas> => this.http.get<Loja>(`${url}/loja`, { params: { slug: `${slug}` }, headers }).pipe(map(data => data[0]));
  LojaCodigo = (id: any): Observable<Loja[]> => this.http.get<Loja[]>(`${url}/loja`, { params: { meta_key: 'cod_loja', meta_value: `${id}` }, headers }).pipe(map(data => data));
  LojaRegion = (): Observable<any[]> => this.http.get<any[]>(`${url}/region`, { params: { per_page: `100` }, headers }).pipe(map(data => data));
  LojaPorRegion = (id: number): Observable<Lojas[]> => this.http.get<Lojas[]>(`${url}/loja?region=${id}&per_page=100`, { headers }).pipe(map(data => data));

  /** Tabloide */
  Tabloides = (limit: number): Observable<Tabloide[]> => this.http.get<Tabloide[]>(`${url}/tabloide`, { params: { per_page: `${limit}` }}).pipe(map(data => data));
  TabloideId = (id: number): Observable<Tabloide[]> => this.http.get<Tabloide[]>(`${url}/tabloide/${id}`).pipe(map(data => data));
  TabloideSlug = (slug: string): Observable<Tabloide[]> => this.http.get<Tabloide[]>(`${url}/tabloide`, { params: { slug: `${slug}` }, headers }).pipe(map(data => data));

  /** Post Blog */
  Blog = (p: number, page: number): Observable<any> => this.http.get<any>(`${urlBlog}/posts?page=${p}&per_page=${page}`, {observe: 'response'}).pipe(map(data => data));
  BlogId = (id: number): Observable<any[]> => this.http.get<any[]>(`${ urlBlog }/posts/${id}`, {headers: headersBlog}).pipe(map(data => data));
  Blogger = (): Observable<any> => this.http.get<any>(`${urlBlog}/posts`, {observe: 'response'});
  BlogSlug = (slug: string): Observable<any[]> => this.http.get<any[]>(`${ urlBlog }/posts`, { params: { slug: `${slug}` }, headers: headersBlog}).pipe(map(data => data[0]));
  BlogImage = (id: number): Observable<any[]> => this.http.get<any[]>(`${ urlBlog }/media/${id}`, {headers: headersBlog}).pipe(map(data => data));
  getBlogCollection = (collection: string) => this.http.get<any[]>(`${ urlBlog }/${collection}`, {observe: 'response'}).pipe(map(data => data));
}
