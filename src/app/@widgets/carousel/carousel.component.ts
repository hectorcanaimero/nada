import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import SwiperCore, { EffectFade,   Navigation, Pagination, A11y, Lazy } from "swiper/core";
import { NewsService } from '@core/services/news.service';

SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data$: Observable<any>;

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
