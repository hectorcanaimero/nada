import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiService } from '../../../shared/services/api.service';
import { SeoService } from '../../../shared/services/seo.service';
import { UtilService } from '../../../shared/services/util.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  image: string;
  loja: any = [];
  code: any = [];
  product: any = [];
  init: boolean = false;
  slug: Observable<string>;
  items: Observable<any[]>;


  constructor(
    private router: Router,
    private seo: SeoService,
    private api: ApiService,
    private util: UtilService,
    private act: ActivatedRoute,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => {
      const value = data[data.length - 1];
      const url = this.router.url.split('/');
      if (value.split('?')[0] === 'init') { this.init = true; }
      this.getProduct(`${data}`);
    });
  }

  getProduct = (slug: string) => {
    const id = slug.split('-');
    const host = id[id.length - 1];
    this.storageMap.watch('Loja').subscribe(({ loja, nome }) => {
      this.loja = nome;
      this.items = this.api.ProdutoLoja(loja, +host).pipe(tap((res) => this.getSeo(res)))
    })
  }

  br_depart = (depart: any) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento)]);
  br_setor = (depart: any, setor: any) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento),
                                                                'setor', this.util.toSlug(this.product.dsc_setor)]);

  onTracking = (name: string, type: string) => this.seo.dataLayerTracking({ event: 'productpageAction', productName: name, productButton: type })

  getSeo = (code: any) => {
    console.log(code);
    this.seo.updateTags({
      title: `Confira a Ofertas de ${code.produtos.dsc_produto} | Condor.com.br`,
      description: code.produtos.dsc_descricao,
      image: `https://marketing.condor.com.br/api/Containers/produtos/download/${ code.host }.jpg`
    });
    this.seo.addCanonical();
    this.seo.dataLayerPage(code.produtos.dsc_produto);
  }
}
