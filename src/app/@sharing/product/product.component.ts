import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';


import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() code: any = [];
  @Input() loja: any = [];
  mas18 = 'Aprecie com moderação. É proibida a venda de bebidas alcoólicas a menores de 18 anos (Lei nº 8.069/90 Art.81, Estatuto da Criança e do Adolescente).';
  webp: string = '';
  image: string = '';
  product: any = [];
  imagem: any = [];

  constructor(
    private router: Router,
    private seo: SeoService,
    private util: UtilService,
    private storageMap: StorageMap
  ) { }

  ngOnInit() {
    this.webp = `${ environment.v1.url }/Containers/webp/download/${this.code.host}.webp`;
    this.webp = `${ environment.v1.url }/Containers/produtos/download/${this.code.host}.jpg`;
    this.product = this.code.produtos;
    this.storageMap.watch('Loja').subscribe((res) => {
      if (res) this.loja = res;
      else this.loja = { loja: 0, slug: '', nome: '' };
    });
  }

  goToProduct =() => {
    this.seo.dataLayerTracking({
      event: 'productInteraction',
      productAction: 'Visualizar Produto',
      productName: this.code.produtos.dsc_produto
    });
    this.router.navigate([
      'produto',
      this.util.toSlug(this.code.produtos.dsc_departamento),
      this.util.toSlug(this.code.produtos.dsc_setor),
      this.code.produtos.slug
    ]);
  }
}
