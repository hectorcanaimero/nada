import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Imagens } from '@core/interfaces/news';
import { NewsService } from '@core/services/news.service';

import SwiperCore, { EffectFade,   Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data$: Observable<Carousel>;

  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.data$ = this.news.getBanners$().pipe(
      map((res) => {
        return {
          left: res?.filter(row => row.position.includes('top-left')),
          right: res?.filter(row => row.position.includes('top-right')),
        }
      })
    );
  }
}

export interface Carousel {
  left: Imagens[];
  right: Imagens[];
}
