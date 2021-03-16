import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

import { ajax } from 'rxjs/ajax';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Static } from './interfaces/static';
import { environment } from 'src/environments/environment.prod';


const v2: string = environment.v2.url;


@Injectable({
  providedIn: 'root'
})

export class UtilService {

  private top$: BehaviorSubject<any> = new BehaviorSubject(null);
  private menu$: BehaviorSubject<any> = new BehaviorSubject(null);
  private header$: BehaviorSubject<any> = new BehaviorSubject(null);
  private footer$: BehaviorSubject<any> = new BehaviorSubject(null);
  private offers$: BehaviorSubject<any> = new BehaviorSubject(null);
  private static$: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(LOCAL_STORAGE) private localStorage: any,
    private http: HttpClient
  ) { }


  // Menus

  // toData
  toData = (file: string) => this.http.get(`./assets/data/${file}.json`);

  setStatic$  = (items: any) => this.static$.next(items);
  getStatic$  = (): Observable<any> => this.static$.asObservable();
  getStatic = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus`).pipe(tap(data => this.setStatic$(data)));

  // getStatic = () => ajax(`${ v2 }/menus`).pipe(
  //   map((res) => res.response),
  //   tap(data => this.setStatic$(data)),
  //   catchError(error =>of(error))
  // );


  // setMenu$  = (items: any) => this.menu$.next(items);
  // getMenu$  = (): Observable<any> => this.menu$.asObservable();
  // getMenu = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/1`).pipe(map(data => data['data']), tap(data => this.setMenu$(data)));


  // setTop$  = (items: any) => this.top$.next(items);
  // getTop$  = (): Observable<any> => this.top$.asObservable();
  // getTop = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/5`).pipe(map(data => data['data']), tap(data => this.setTop$(data)));

  // setHeader$  = (items: any) => this.header$.next(items);
  // getHeader$  = (): Observable<any> => this.header$.asObservable();
  // getHeader = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/3`).pipe(map(data => data['data']), tap(data => this.setHeader$(data)));

  // setFooter$  = (items: any) => this.footer$.next(items);
  // getFooter$  = (): Observable<any> => this.footer$.asObservable();
  // getFooter = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/2`).pipe(map(data => data['data']), tap(data => this.setFooter$(data)));

  // setOffers$  = (items: any) => this.offers$.next(items);
  // getOffers$  = (): Observable<any> => this.offers$.asObservable();
  // getOffers = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/4`).pipe(map(data => data['data']), tap(data => this.setOffers$(data)));



  /** Funcion Storage */
  StorageParse(Item: string) {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(this.localStorage.getItem(Item));
    }
  }

  StorageSimple(Item: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.localStorage.getItem(Item);
    }
  }


  StorageAddKey(key: string, data: any) {
    if (isPlatformBrowser(this.platformId)) {
      return this.localStorage.setItem(key, JSON.stringify(data));
    }
  }

  StorageRemoveKey(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.localStorage.removeItem(key);
    }
  }


  /** Function Javascript */
  // toRandom
  toRandom(arr: any, n: number) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) { throw new RangeError('toRandom: more elements taken than available'); }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  // toSlug
  toSlug(str: string) {
    str = `${str}`;
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  }

  // toChunk
  toChunk(arr: any, chunkSize: any) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  // toCEP
  toCEP = (cep: number) => ajax(`https://viacep.com.br/ws/${cep}/json/`)
  .pipe(
    map((res) => res.response),
    catchError(error =>of(error))
  );

  // to Message Alert
  sweetalert( title: string, text: string, icon: any = 'success', position: any= 'top-end') {
    Swal.fire({ icon, title, text, position });
  }
}

export interface LojaStorage {
  loja: number;
  nome: string;
  slug: string;
}
