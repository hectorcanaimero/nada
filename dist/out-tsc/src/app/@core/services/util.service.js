import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { ajax } from 'rxjs/ajax';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const v2 = environment.v2.url;
export class UtilService {
    constructor(
    // tslint:disable-next-line: ban-types
    platformId, localStorage, http) {
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.http = http;
        this.top$ = new BehaviorSubject(null);
        this.menu$ = new BehaviorSubject(null);
        this.header$ = new BehaviorSubject(null);
        this.footer$ = new BehaviorSubject(null);
        this.offers$ = new BehaviorSubject(null);
        this.static$ = new BehaviorSubject(null);
        // Menus
        // toData
        this.toData = (file) => this.http.get(`./assets/data/${file}.json`);
        this.setStatic$ = (items) => this.static$.next(items);
        this.getStatic$ = () => this.static$.asObservable();
        this.getStatic = () => this.http.get(`${v2}/menus`).pipe(tap(data => this.setStatic$(data)));
        // toCEP
        this.toCEP = (cep) => ajax(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(map((res) => res.response), catchError(error => of(error)));
    }
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
    StorageParse(Item) {
        if (isPlatformBrowser(this.platformId)) {
            return JSON.parse(this.localStorage.getItem(Item));
        }
    }
    StorageSimple(Item) {
        if (isPlatformBrowser(this.platformId)) {
            return this.localStorage.getItem(Item);
        }
    }
    StorageAddKey(key, data) {
        if (isPlatformBrowser(this.platformId)) {
            return this.localStorage.setItem(key, JSON.stringify(data));
        }
    }
    StorageRemoveKey(key) {
        if (isPlatformBrowser(this.platformId)) {
            return this.localStorage.removeItem(key);
        }
    }
    /** Function Javascript */
    // toRandom
    toRandom(arr, n) {
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        if (n > len) {
            throw new RangeError('toRandom: more elements taken than available');
        }
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    // toSlug
    toSlug(str) {
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
    toChunk(arr, chunkSize) {
        const R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    // to Message Alert
    sweetalert(title, text, icon = 'success', position = 'top-end') {
        Swal.fire({ icon, title, text, position });
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(LOCAL_STORAGE), i0.ɵɵinject(i1.HttpClient)); };
UtilService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UtilService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCAL_STORAGE]
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=util.service.js.map