import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Observable, timer } from 'rxjs';

import { SeoService } from '../../../shared/services/seo.service';
import { UtilService } from '../../../shared/services/util.service';
import { NewsService } from '../../../shared/services/news.service';

const objeto = { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' };

@Component({
  selector: 'helper-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

export class SelectorComponent implements OnInit {

  @Output() loja: any;
  @Input() new: any;
  @Input() type?: string = 'simple';
  @Input() load?: boolean = false;
  @ViewChild('frame', { static: true }) public frame: any;
  condor: number;
  miObjeto: Observable<any>;
  region: Observable<any>;
  lojas: any =[ ];

  constructor(
    private router: Router,
    private seo: SeoService,
    private util: UtilService,
    private news: NewsService,
    private storageMap: StorageMap
    ) { }

  ngOnInit() {
    this.miObjeto = this.storageMap.watch('Loja');
    timer(400).subscribe(() => { if (this.load === true) { this.frame.show(); } })
    this.region = this.news.getRegion$();
  }

  getLojas = (e: any) => {
    console.log(e.target.value);
    this.news.LojaPorRegion(e.target.value).subscribe((res) => this.lojas = res);
  }
  setLocalStorageLoja = () => this.storageMap.set('Loja', objeto).subscribe(() => {});
  getLocalStorageLoja = () => this.util.StorageParse('Loja');

  open = () => {
    this.frame.show();
    this.seo.dataLayerTracking({ event: 'findStore', storeAction: 'Clique Header', storeName: 'Nome da Loja' });
  }

  close = () => this.frame.hide();


  selectCondor = () => {
    this.news.LojaId(this.condor).subscribe(data => {
      const type = { loja: data.cod_loja, slug: data.slug, nome: data.title1 };
      this.storageMap.delete('Loja').subscribe(() => {});
      this.storageMap.set('Loja', type).subscribe(() => {});
    });
    this.frame.hide();
    timer(300).subscribe(() => this.init());
  }

  init = () => {
    const www = 'https://www.condor.com.br';
    const url = this.router.url.split('/');
    const value = url[url.length - 1 ];
    if (value.split('?').shift() === 'init')
      if (url[url.length - 3 ] === 'departamento') window.location.href = `${www}/${url[1]}/${url[2]}`;
      else if (url[url.length - 3 ] === 'setor') window.location.href = `${www}/${url[1]}/${url[2]}/${url[3]}/${url[4]}`;
      else window.location.href = `${www}/produto/${url[2]}/${url[3]}/${url[4]}`;
      else window.location.reload();
  }
}
