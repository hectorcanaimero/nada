import { Component, OnInit, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { Subscription, Observable, timer } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { Ofertas } from 'src/app/shared/services/interfaces/ofertas';
import { UtilService, LojaStorage } from '../../shared/services/util.service';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  @Input() code: any;
  @Input() sector?: number;
  @Input() type?: any;
  @Input() title: string;
  @Input() icon: string;
  @Input() link: string;
  items: Observable<Ofertas>;
  test: Observable<Ofertas>;
  loja: LojaStorage;
  subscription: Subscription;

  ofertas: any = [];
  isLoading: boolean = true;

  options = {
    grabCursor: true,
    slidesPerView: 2,
    freeMode: true,
    spaceBetween: 7,
    type: 'progressbar',
    loop: true,
    autoplay: { delay: 1800 },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 500,
    margin: 10,
    autoplay: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class=" fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 2, nav: true },
      480: { items: 3, nav: true },
      768: { items: 3, nav: true },
      1024: { items: 4, nav: true },
    },
  };


  constructor(
    private api: ApiService,
    private util: UtilService,
    private storageMap: StorageMap
  ) {}

  ngOnInit(): void {
    timer(300).subscribe(() => {
      switch (this.type) {
        case 'slug':
          this.ofertasSlug(this.code);
          break;
        case 'campanha':
          this.ofertasCampanha(this.code);
          break;
        default:
          this.ofertasDepartamento(this.code);
          break;
      }
    })
  }

  ofertasSlug = (code: string) => this.items = this.api.getOfertas$()
    .pipe(
      map((res) => {
        if(res) {
          const result = res['filter']((row => row.slug === code));
          return result.slice(0,15);
        }
      })
    );

  ofertasCampanha = (code: number) => this.items = this.api.getOfertas$()
  .pipe(
    map((res) => {
      if(res) {
        const result = res['filter']((row => row.campanha === code))
        return result.slice(0,15)
      }
    })
  );


  ofertasDepartamento = (code: number) => this.items = this.api.getOfertas$()
  .pipe(
    map((res) => {
      if(res) {
        const result = res['filter']((row => row.departamento === code))
        return result.slice(0,15)
      }
    })
  );
}
