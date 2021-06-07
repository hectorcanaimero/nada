import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categories, Post } from '@core/interfaces/blog';
import { environment } from 'src/environments/environment.prod';

const url: string = environment.blog.url;
const headers = new HttpHeaders({Authorization: `${ environment.blog.key }`});

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts = (p: number, page: number): Observable<any> => {
    return this.http.get<any>(`${ url }/posts?page=${ p }&per_page=${ page }`, {observe: 'response'})
      .pipe(map((data) => data));
  }

  getPostId = (id: number): Observable<Post> => {
    return this.http.get<Post>(`${ url }/posts/${ id }`).pipe(map(data => data));
  }
  getPostSlug = (slug: string): Observable<Post> => {
    return this.http.get<Post>(`${ url }/posts`, { params: { slug: `${slug}` } }).pipe(map((data) => data[0]));
  }
  getPostSearch = (search: string, page: number, limit = 6): Observable<any> => {
    return this.http.get<any>(`${ url }/posts?search=${search}&page=${page}&per_page=${limit}`, {headers, observe: 'response' });
  }

  // getPostsCategories = (categories: number, limit = 6): Observable<any> => {
  //   return this.http.get<any>(`${ url }/posts?categories=${categories}&per_page=${limit}`, {observe: 'response'});
  // }

  getPostsCategories = (categories: number, page: number, limit = 6): Observable<any> => {
    return this.http.get<any>(`${ url }/posts?categories=${categories}&page=${page}&per_page=${limit}`, {observe: 'response'});
  }


  getPostsTags = (tags: number, limit: number): Observable<any> => {
    return this.http.get<any>(`${ url }/posts?tags=${tags}&per_page=${limit}`, {observe: 'response'});
  }

  getCategoriesSlug = (slug: string): Observable<Categories> => {
    return this.http.get<Categories>(`${ url }/categories?slug=${slug}`).pipe(map((res) => res[0]));
  }

  getCategories = (limit: number): Observable<Categories[]>=> {
    return this.http.get<Categories[]>(`${ url }/categories?orderby=count&order=desc&per_page=${limit}`);
  }

  getTagSlug = (slug: string): Observable<any> => {
    return this.http.get<any>(`${ url }/tags?slug=${slug}`).pipe(map((res) => res[0]));
  }

}
