import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { Ofertas } from '@core/interfaces/ofertas';
import { SeoService } from '@core/services/seo.service';
import { DataService } from '@core/services/data.service';
import { UtilService } from '@core/services/util.service';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})

export class ProductIdComponent implements OnInit {

  image: string;
  code: any = [];
  product: any = [];
  init: boolean = false;
  loja: string = '';
  slug$: Observable<string>;
  items$: Observable<Ofertas>;


  constructor(
    private router: Router,
    private seo: SeoService,
    private db: DataService,
    private util: UtilService,
    private act: ActivatedRoute,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.getProduct(this.splitSlugHost(data)));
  }

  private splitSlugHost = (slug: any) => {
    const host = slug.split('-');
    return +host[host.length - 1];
  }


  getProduct = (host: number) => {
    this.storageMap.watch('Loja').subscribe(({ loja, nome }) => {
      this.loja = nome;
      this.items$ = this.db.ProdutoLoja(loja, host).pipe(
        tap((res) => this.getSeo(res)), delay(100)
      );
    })
  }

  br_depart = (depart: any) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento)]);
  br_setor = (depart: any, setor: any) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento),
                                                                'setor', this.util.toSlug(this.product.dsc_setor)]);

  onTracking = (name: string, type: string) => this.seo.dataLayerTracking({ event: 'productpageAction', productName: name, productButton: type })

  getSeo = (code: any) => {
    this.seo.updateTags({
      title: `Confira a Ofertas de ${code.produtos.dsc_produto} | Condor.com.br`,
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: `https://marketing.condor.com.br/db/Containers/produtos/download/${ code.host }.jpg`
    });
    this.seo.addCanonical();
    this.seo.dataLayerPage(code.produtos.dsc_produto);
  }
}
