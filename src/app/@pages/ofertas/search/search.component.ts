import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { DataService } from '@core/services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  slug: Observable<string>;
  loja: any = [];
  items: any = [];
  fill: any = [];
  product: any = [];
  message: string = '';

  constructor(
    private seo: SeoService,
    private util: UtilService,
    private db: DataService,
    private act: ActivatedRoute,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => {
      this.Search(data);
    }, err => console.log(err));
  }

  Search(slug: string) {
    let ofertas: any = [];
    const fills: any = [];
    const text = slug.split('-').join('%20');
    const search = slug.split('-').join(' ');
    this.storageMap.watch('Loja').subscribe(({ loja }) => {
      this.db.Search(text).subscribe(
        res => {
          // tslint:disable-next-line: forin
          for (const k in res) {
            // tslint:disable-next-line: forin
            for (const i in res[k].ofertas) {
              if (res[k].ofertas[i].loja === +loja){
                ofertas = {
                  campanhaId: res[k].ofertas[i].campanhaId,
                  campanha: res[k].ofertas[i].campanha,
                  hostId: res[k].ofertas[i].hostId,
                  host: res[k].ofertas[i].host,
                  loja: res[k].ofertas[i].loja,
                  departamento: res[k].ofertas[i].departamento,
                  slug: res[k].ofertas[i].slug,
                  preco_regular: res[k].ofertas[i].preco_regular,
                  parcela_regular: res[k].ofertas[i].parcela_regular,
                  qtd_regular: res[k].ofertas[i].qtd_regular,
                  preco_clube: res[k].ofertas[i].preco_clube,
                  parcela_clube: res[k].ofertas[i].parcela_clube,
                  qtd_clube: res[k].ofertas[i].qtd_clube,
                  dsc_kit: res[k].ofertas[i].dsc_kit,
                  cod_kit: res[k].ofertas[i].cod_kit,
                  produtos: res[k]
                };
                fills.push(ofertas);
              }
            }
          }
          this.items = fills;
          if (this.items.length > 0) {
            this.message = `Ofertas encontradas para a sua busca "${search}".`;
            this.seo.dataLayerTracking({
              event: 'siteSearch',
              searchTerm: search
            });
          } else {
            this.seo.dataLayerTracking({
              event: 'notfound',
              searchTerm: search
            });
            this.message = 'Esse produto não está disponível no site.<br>Mas aproveite as outras ofertas que preparamos para você.';
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  trackBy = (index: number, item: any) => item[index];
}
