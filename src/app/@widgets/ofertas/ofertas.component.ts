import { Component, OnInit, Input } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map, tap  } from 'rxjs/operators';

import { DataService } from '@core/services/data.service';
import { Ofertas } from '@core/interfaces/ofertas';
import { StorageMap } from '@ngx-pwa/local-storage';

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

  items$: Observable<Ofertas[]>;
  loja: any = [];
  total: number = 0;

  options = {
    freeMode: true,
    spaceBetween: 15,
    grabCursor: true,
    slidesPerView: 1.5,
    type: 'progressbar',
    loop: true,
    autoplay: { delay: 1800 },
    breakpoints: {
      360:  { slidesPerView: 2 },
      768:  { slidesPerView: 3.5 },
      1024: { slidesPerView: 4.5 },
      1200: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  constructor(
    private db: DataService,
    private storage: StorageMap,
  ) {}

  ngOnInit(): void {

    timer(300).subscribe(() => {
      this.getOfertas(this.code);
      this.storage.get('Loja').subscribe((res) => this.loja = res)
    })
  }
  getOfertas = (code: any) => {
    let result: any = [];
    this.items$ = this.db.getOfertas$().pipe(
      map((res) => {
        if (this.type === 'slug') result = res?.filter((row => row.slug === code));
        else if (this.type === 'campanha') result = res?.filter((row => row.campanha === code));
        else if (this.type === 'departamento') result = res?.filter((row => row.departamento === code));
          return result?.slice(0,15);
      }),
      tap((res) => this.total = res.length)
    );
  }
}
