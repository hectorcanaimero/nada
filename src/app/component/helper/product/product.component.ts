import { StorageMap } from '@ngx-pwa/local-storage';
import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { SeoService } from '../../../shared/services/seo.service';
import { Router } from '@angular/router';
import { UtilService } from '../../../shared/services/util.service';
import { environment } from 'src/environments/environment';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'helper-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() code: any = [];
  product: any = [];
  imagem: any = [];
  loja: any = [];

  subscription: Subscription;

  constructor(
    private util: UtilService,
    private router: Router,
    private seo: SeoService,
    private storageMap: StorageMap
  ) { }

  ngOnInit() {
    timer(500).subscribe(() => {
      this.product = this.code.produtos;
      this.subscription = this.storageMap.watch('Loja').subscribe((res) => {
        if (res) this.loja = res;
        else this.loja = { loja: 0, slug: '', nome: '' };
      });
      this.imagem = `${environment.v1.url}/Containers/produtos/download`;
    })
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  goToProduct() {
    this.seo.dataLayerTracking({
      event: 'productInteraction',
      productAction: 'Visualizar Produto',
      productName: this.product.dsc_produto
    });
    this.router.navigate([
      'produto',
      this.util.toSlug(this.product.dsc_departamento),
      this.util.toSlug(this.product.dsc_setor),
      this.code.produtos.slug
    ]);
  }
}
