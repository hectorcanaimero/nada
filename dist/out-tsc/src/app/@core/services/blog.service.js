import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const url = environment.blog.url;
const headers = new HttpHeaders({ Authorization: `${environment.blog.key}` });
export class BlogService {
    constructor(http) {
        this.http = http;
        this.getPosts = (p, page) => {
            return this.http.get(`${url}/posts?page=${p}&per_page=${page}`, { observe: 'response' })
                .pipe(map((data) => data));
        };
        this.getPostId = (id) => {
            return this.http.get(`${url}/posts/${id}`).pipe(map(data => data));
        };
        this.getPostSlug = (slug) => {
            return this.http.get(`${url}/posts`, { params: { slug: `${slug}` } }).pipe(map((data) => data[0]));
        };
        this.getPostSearch = (search, page, limit = 6) => {
            return this.http.get(`${url}/posts?search=${search}&page=${page}&per_page=${limit}`, { headers, observe: 'response' });
        };
        // getPostsCategories = (categories: number, limit = 6): Observable<any> => {
        //   return this.http.get<any>(`${ url }/posts?categories=${categories}&per_page=${limit}`, {observe: 'response'});
        // }
        this.getPostsCategories = (categories, page, limit = 6) => {
            return this.http.get(`${url}/posts?categories=${categories}&page=${page}&per_page=${limit}`, { observe: 'response' });
        };
        this.getPostsTags = (tags, limit) => {
            return this.http.get(`${url}/posts?tags=${tags}&per_page=${limit}`, { observe: 'response' });
        };
        this.getCategoriesSlug = (slug) => {
            return this.http.get(`${url}/categories?slug=${slug}`).pipe(map((res) => res[0]));
        };
        this.getCategories = (limit) => {
            return this.http.get(`${url}/categories?orderby=count&order=desc&per_page=${limit}`);
        };
        this.getTagSlug = (slug) => {
            return this.http.get(`${url}/tags?slug=${slug}`).pipe(map((res) => res[0]));
        };
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(i0.ɵɵinject(i1.HttpClient)); };
BlogService.ɵprov = i0.ɵɵdefineInjectable({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=blog.service.js.map