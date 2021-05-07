import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';

import { timer, Subscription } from 'rxjs';

import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {

  @Input() code: any = [];
  @Input() loja: any = [];
  mas18 = 'Aprecie com moderação. É proibida a venda de bebidas alcoólicas a menores de 18 anos (Lei nº 8.069/90 Art.81, Estatuto da Criança e do Adolescente).';

  product: any = [];
  imagem: any = [];

  subscription: Subscription;

  constructor(
    private router: Router,
    private seo: SeoService,
    private util: UtilService,
    private storageMap: StorageMap
  ) { }

  ngOnInit() {
    timer(500).subscribe(() => {
      this.product = this.code.produtos;
      this.subscription = this.storageMap.watch('Loja').subscribe((res) => {
        if (res) this.loja = res;
        else this.loja = { loja: 0, slug: '', nome: '' };
      });
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //. console.log(changes);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }




  goToProduct() {
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
