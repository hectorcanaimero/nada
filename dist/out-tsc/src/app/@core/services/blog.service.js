import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
const url = environment.blog.url;
const headers = new HttpHeaders({ Authorization: `${environment.blog.key}` });
let BlogService = class BlogService {
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
        this.getPostSearch = (search, limit = 6) => {
            return this.http.get(`${url}/posts?search=${search}&per_page=${limit}`, { headers, observe: 'response' });
        };
        this.getPostsCategories = (categories, limit = 6) => {
            return this.http.get(`${url}/posts?categories=${categories}&per_page=${limit}`, { observe: 'response' });
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
};
BlogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BlogService);
export { BlogService };
//# sourceMappingURL=blog.service.js.map