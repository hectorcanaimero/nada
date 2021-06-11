import { timer } from 'rxjs';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ProductComponent implements OnInit, OnChanges {

  @Input() code: any = [];
  @Input() loja: any = [];
  mas18: any;
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
    timer(200).subscribe(() => {
      this.mas18 = this.findMas18(this.code.produtos.image);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.code = changes.code.currentValue;
  }

  findMas18 = (str: any) => `${str}`.indexOf('alcoólicas');

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
