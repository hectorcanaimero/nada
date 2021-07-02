import { StorageMap } from '@ngx-pwa/local-storage';
import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@core/services/data.service';
import { Ofertas } from '@core/interfaces/ofertas';

import SwiperCore, { EffectFade,   Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);

@Component({
  selector: 'app-widget-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  // titulo
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() title: string = '';

  // Ofertas
  @Input() code: any;
  @Input() type: any;
  @Input() sector: number;
  @Input() loja: any = [];

  total: number = 0;
  items$: Observable<Ofertas[]>;


  options = {
    freeMode: true, spaceBetween: 15,
    grabCursor: true, slidesPerView: 1.5,
    type: 'progressbar', loop: true,
    autoplay: { delay: 1800 },
    breakpoints: {
      360:  { slidesPerView: 2 }, 768:  { slidesPerView: 3.5 },
      1024: { slidesPerView: 4.5 }, 1200: { slidesPerView: 5 },
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  }

  constructor(
    private db: DataService,
    private storage: StorageMap,
  ) {}

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas = () => {
    this.storage.get('Loja').pipe().subscribe((res) => {
      this.loja = res;
      if (this.type === 'slug') this.items$ = this.db.OfertasLojaSlug(this.loja.loja, this.code);
      else if (this.type === 'campanha') this.items$ = this.db.OfertasLojaCampanha(this.loja.loja, this.code);
      else if (this.type === 'departamento') this.items$ = this.db.OfertasLojaDepartamento(this.loja.loja, this.code);
    });
  }

  trackBy = (index: number, item: any) => item.host;
}
