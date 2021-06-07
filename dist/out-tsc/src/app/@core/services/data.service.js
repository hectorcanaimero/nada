import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { tap, retry, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const url = environment.v1.url;
const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
export class DataService {
    constructor(http) {
        this.http = http;
        // Ofertas Dia
        this.menu$ = new BehaviorSubject(null);
        this.oferta$ = new BehaviorSubject(null);
        this.Query = (query) => this.http.get(url + query);
        this.add = (table, data) => this.http.post(`${url}/${table}`, data, { headers });
        // Ofertas
        this.setOfertas$ = (items) => this.oferta$.next(items);
        this.getOfertas$ = () => this.oferta$.asObservable();
        this.getOfertas = (loja) => {
            return this.Query(`/Ofertas/LojaProdutos?loja=${loja}`).pipe(map((res) => res), tap((res) => this.setOfertas$(res)));
        };
        /** Menus */
        this.setMenuOfertas$ = (items) => this.menu$.next(items);
        this.getMenuOfertas$ = () => this.menu$.asObservable();
        this.getMenuOfertas = (tipo) => this.Query(`/Produtos/${tipo}`)
            .pipe(tap((res) => this.setMenuOfertas$(res)));
        this.getCollection = (collection) => this.Query(collection).pipe(retry(3), map((res) => res));
        this.OfertasLojaDepartamento = (loja, departamento) => this.Query(`/Ofertas/LojaProdutosDepartamento?loja=${loja}&departamento=${departamento}`).pipe(map((res) => res));
    }
    // Ofertas Loja Slug
    OfertasLojaSlug(loja, slug, limit = 100) {
        return this.Query(`/Ofertas/LojaProdutosSlug?loja=${loja}&slug=${slug}&limit=${limit}`).pipe(retry(3), map((res) => res));
    }
    // Ofertas Loja Campanha
    OfertasLojaCampanha(loja, campanha, limit = 100) {
        return this.Query(`/Ofertas/LojaProdutosCampanha?loja=${loja}&campanha=${campanha}&limit=${limit}`);
    }
    // Ofertas Loja Departamento
    OfertasLojaDepartamentoSetor(loja, departamento, setor, limit = 100) {
        const query = `/Ofertas/LojaProdutosDepartamentoSetor?loja=${loja}&departamento=${departamento}&setor=${setor}`;
        return this.Query(`${query}&limit${limit}`).pipe(retry(3), map((res) => res));
    }
    // Search
    Search(search) {
        const query1 = `filter[where][or][0][dsc_produto][like]=%25${search}%25`;
        const query2 = `filter[where][or][1][dsc_descricao][like]=%25${search}%25`;
        const query = `/Produtos?filter[include]=ofertas&${query1}&${query2}`;
        return this.Query(query).pipe(retry(3), map((res) => res));
    }
    // Produto
    ProdutoLoja(loja, host) {
        return this.Query(`/Ofertas/LojaProduto?loja=${loja}&host=${host}`).pipe(retry(3), map((res) => res[0]));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(i1.HttpClient)); };
DataService.ɵprov = i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map