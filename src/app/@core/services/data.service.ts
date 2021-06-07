import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageMap } from '@ngx-pwa/local-storage';
import { tap, retry, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { Ofertas } from '@core/interfaces/ofertas';
import { MenuDepartamento } from '@core/interfaces/menu';

import { environment } from '../../../environments/environment.prod';
const url = environment.v1.url;
const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private menu$: BehaviorSubject<MenuDepartamento> = new BehaviorSubject(null);
  private oferta$: BehaviorSubject<Ofertas[]> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private storageMap: StorageMap,
  ) { }

  private Query = <T>(query: string) => this.http.get<T>(url + query);
  add = (table: string, data: any): Observable<any[]> => this.http.post<any[]>(`${url}/${table}`, data, { headers });


  // Ofertas
  setOfertas$  = (items: Ofertas[]) => this.oferta$.next(items);
  getOfertas$  = (): Observable<Ofertas[]> => this.oferta$.asObservable();
  getOfertas = (loja: any): Observable<Ofertas[]> => {
    return this.Query<Ofertas[]>(`/Ofertas/LojaProdutos?loja=${loja}`).pipe(
      tap((data) => this.storageMap.set('ofertas', data).subscribe(() => {})));
  }

  /** Menus */
  setMenuOfertas$  = (items: MenuDepartamento) => this.menu$.next(items);
  getMenuOfertas$  = (): Observable<any> => this.menu$.asObservable();
  getMenuOfertas = (tipo: string): Observable<MenuDepartamento> => this.Query<MenuDepartamento>(`/Produtos/${tipo}`)
        .pipe(tap((res) => this.setMenuOfertas$(res)));

  getCollection = (collection: string): Observable<any[]> => this.Query<any[]>(collection).pipe(retry(3), map((res) => res));

  OfertasLojaDepartamento = (loja: number, departamento: number): Observable<Ofertas[]> => this.Query<Ofertas[]>(
    `/Ofertas/LojaProdutosDepartamento?loja=${loja}&departamento=${departamento}`).pipe(map((res) => res));


    // Ofertas Loja Slug
  OfertasLojaSlug(loja: number, slug: string, limit: number = 100): Observable<Ofertas[]> {
    return this.Query<Ofertas[]>(`/Ofertas/LojaProdutosSlug?loja=${loja}&slug=${slug}&limit=${limit}`).pipe(retry(3), map((res) => res));
  }
  // Ofertas Loja Campanha
  OfertasLojaCampanha(loja: number, campanha: number, limit: number = 100): Observable<Ofertas[]> {
    return this.Query<Ofertas[]>(`/Ofertas/LojaProdutosCampanha?loja=${loja}&campanha=${campanha}&limit=${limit}`);
  }

  // Ofertas Loja Departamento
  OfertasLojaDepartamentoSetor(loja: number, departamento: number, setor: number, limit: number = 100): Observable<Ofertas[]> {
    const query = `/Ofertas/LojaProdutosDepartamentoSetor?loja=${loja}&departamento=${departamento}&setor=${setor}`;
    return this.Query<Ofertas[]>(`${query}&limit${limit}`).pipe(retry(3), map((res) => res));
  }

  // Search
  Search(search: string): Observable<any[]> {
    const query1 = `filter[where][or][0][dsc_produto][like]=%25${search}%25`;
    const query2 = `filter[where][or][1][dsc_descricao][like]=%25${search}%25`;
    const query = `/Produtos?filter[include]=ofertas&${query1}&${query2}`;
    return this.Query<any[]>(query).pipe(retry(3), map((res) => res));
  }

  // Produto
  ProdutoLoja(loja: number, host: number) {
    return this.Query<any[]>(`/Ofertas/LojaProduto?loja=${loja}&host=${host}`).pipe(retry(3), map((res) => res[0]));
  }
}
