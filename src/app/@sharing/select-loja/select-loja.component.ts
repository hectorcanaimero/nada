import { Component, OnInit, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { NewsService } from '@core/services/news.service';
import { DataService } from '@core/services/data.service';


@Component({
  selector: 'app-select-loja',
  templateUrl: './select-loja.component.html',
  styleUrls: ['./select-loja.component.scss']
})

export class SelectLojaComponent implements OnInit, AfterViewInit {

  @ViewChild('frame', { static: true }) public frame: any;

  @Input() new: any;
  @Output() loja: any;
  @Input() load?: boolean = false;
  @Input() type?: string = 'simple';

  condor: number;
  lojas: any =[ ];
  region: Observable<any>;
  miObjeto: Observable<any>;
  lojaDefault = { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' };

  constructor(
    private router: Router,
    private seo: SeoService,
    private db: DataService,
    private util: UtilService,
    private news: NewsService,
    private storageMap: StorageMap
    ) { }

  ngOnInit() {
    this.miObjeto = this.storageMap.watch('Loja');
    this.region = this.news.getRegion$();
  }

  ngAfterViewInit(): void {
    if (this.load === true) this.frame.show();
  }

  getLojas = (e: any) => this.news.LojaPorRegion(e.target.value).pipe(take(1))
    .subscribe((res) => this.lojas = res);

  setLocalStorageLoja = () => this.storageMap.set('Loja', this.lojaDefault)
    .subscribe(() => {});

  getLocalStorageLoja = () => this.util.StorageParse('Loja');

  selectCondor = () => {
    this.news.LojaId(this.condor).subscribe(data => {
      this.db.getOfertas(data.cod_loja).pipe(take(1)).subscribe();
      this.storageMap.set('Loja', { loja: data.cod_loja, slug: data.slug, nome: data.title1 }).subscribe(() => {});
    });
    this.frame.hide();
  }

  open = () => {
    this.frame.show();
    this.seo.dataLayerTracking({ event: 'findStore', storeAction: 'Clique Header', storeName: 'Nome da Loja' });
  }

  close = () => this.frame.hide();
  trackBy = (index: number, item: any) => item[index];

}
