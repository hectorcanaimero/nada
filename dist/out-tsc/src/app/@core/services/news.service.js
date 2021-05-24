import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from "rxjs";
import { tap, map, retry } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';
const url = environment.news.url;
const headers = new HttpHeaders({ Authorization: `${environment.news.key}` });
const urlBlog = environment.blog.url;
const headersBlog = new HttpHeaders({ Authorization: `${environment.blog.key}` });
let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
        this.region$ = new BehaviorSubject(null);
        this.loja$ = new BehaviorSubject(null);
        this.banner$ = new BehaviorSubject(null);
        // Banners
        this.setBanners$ = (items) => this.banner$.next(items);
        this.getBanners$ = () => this.banner$.asObservable();
        this.getBanners = () => {
            return this.http.get(`${url}/imagens`, { params: { per_page: `100` } })
                .pipe(tap((data) => this.setBanners$(data)));
        };
        // Cidade
        this.setRegion$ = (items) => this.region$.next(items);
        this.getRegion$ = () => this.region$.asObservable();
        this.getRegion = () => {
            return this.http.get(`${url}/region`, { params: { per_page: `100` } })
                .pipe(tap((data) => this.setRegion$(data)));
        };
        // Loja
        this.setLoja$ = (items) => this.loja$.next(items);
        this.getLoja$ = () => this.loja$.asObservable();
        this.getLoja = () => {
            return this.http.get(`${url}/loja?per_page=100`)
                .pipe(tap((data) => this.setLoja$(data)));
        };
        this.getSelector = () => {
            return forkJoin({
                region: this.http.get(`${url}/region`, { params: { per_page: `100` } }).pipe(map(data => data)),
                lojas: this.http.get(`${url}/loja`, { params: { per_page: `100` } }).pipe(map(data => data))
            });
        };
        this.getImage = (id) => {
            return this.http.get(`${url}/media/${id}`);
        };
        /** Module Page */
        this.Page = () => {
            return this.http.get(`${url}/pages`)
                .pipe(tap(data => data));
        };
        this.getPage = () => {
            return this.http.get(`${url}/pages`);
        };
        this.PageSlug = (slug) => this.http.get(`${url}/pages`, { params: { slug: `${slug}` } }).pipe(map((res) => res[0]));
        /** Module Post */
        this.Posts = (p, page) => this.http.get(`${url}/posts?page=${p}&per_page=${page}`, { observe: 'response' }).pipe(map((data) => data));
        this.PostId = (id) => this.http.get(`${url}/posts/${id}`).pipe(map(data => data));
        this.PostSlug = (slug) => this.http.get(`${url}/posts`, { params: { slug: `${slug}` } }).pipe(map((data) => data[0]));
        this.PostSearch = (search) => this.http.get(`${url}/posts`, { params: { search: `${search}` }, headers }).pipe(map(data => data));
        /** Module Loja */
        this.Lojas = (limit) => this.http.get(`${url}/loja`, { params: { per_page: `${limit}` }, headers }).pipe(map(data => data));
        this.LojaId = (id) => this.http.get(`${url}/loja/${id}`).pipe(map(data => data));
        this.LojaSlug = (slug) => this.http.get(`${url}/loja`, { params: { slug: `${slug}` }, headers }).pipe(map(data => data[0]));
        this.LojaCodigo = (id) => this.http.get(`${url}/loja`, { params: { meta_key: 'cod_loja', meta_value: `${id}` }, headers }).pipe(map(data => data));
        this.LojaRegion = () => this.http.get(`${url}/region`, { params: { per_page: `100` }, headers }).pipe(map(data => data));
        this.LojaPorRegion = (id) => this.http.get(`${url}/loja?region=${id}&per_page=100`, { headers }).pipe(map(data => data));
        /** Tabloide */
        this.Tabloides = (limit) => this.http.get(`${url}/tabloide`, { params: { per_page: `${limit}` } }).pipe(map(data => data));
        this.TabloideId = (id) => this.http.get(`${url}/tabloide/${id}`).pipe(map(data => data));
        this.TabloideSlug = (slug) => this.http.get(`${url}/tabloide`, { params: { slug: `${slug}` }, headers }).pipe(map(data => data));
        /** Post Blog */
        this.Blog = (p, page) => this.http.get(`${urlBlog}/posts?page=${p}&per_page=${page}`, { observe: 'response' }).pipe(map(data => data));
        this.BlogId = (id) => this.http.get(`${urlBlog}/posts/${id}`, { headers: headersBlog }).pipe(map(data => data));
        this.Blogger = () => this.http.get(`${urlBlog}/posts`, { observe: 'response' });
        this.BlogSlug = (slug) => this.http.get(`${urlBlog}/posts`, { params: { slug: `${slug}` }, headers: headersBlog }).pipe(map(data => data[0]));
        this.BlogImage = (id) => this.http.get(`${urlBlog}/media/${id}`, { headers: headersBlog }).pipe(map(data => data));
        this.getBlogCollection = (collection) => this.http.get(`${urlBlog}/${collection}`, { observe: 'response' }).pipe(map(data => data));
    }
    LastNews(limit) {
        return this.http.get(`${url}/posts`).pipe(retry(3), map(res => res), map((data) => data['slice'](0, limit)));
    }
    PageCollection(collection) {
        return this.http.get(`${url}/pages${collection}`).pipe(retry(3), map(res => res));
    }
    PageId(id) {
        const sql = `${url}/pages`;
        return this.http.get(`${url}/pages/${id}`)
            .pipe(tap(data => data));
    }
    /** Module Imagens */
    ImagensPosition(position) {
        return this.http.get(`${url}/imagens`, {
            params: { position }
        }).pipe(retry(3), map(res => res.filter(row => row.status === 'publish' || row.position == position)));
    }
    /** Module Campanha */
    Campanha(slug) {
        return this.http.get(`${url}/posto`, {
            params: { slug: `${slug}` }
        }).pipe(tap(data => data));
    }
};
NewsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NewsService);
export { NewsService };
//# sourceMappingURL=news.service.js.map