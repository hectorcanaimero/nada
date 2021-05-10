import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from '@core/services/blog.service';
import { Post } from '@core/interfaces/blog';

import SwiperCore, { EffectFade,   Navigation, Pagination, Autoplay, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay, A11y, Lazy]);

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogSliderComponent implements OnInit {

  items$: Observable<Post[]>;
  slide: number = 0;

  options = {
    loop: true,
    lazy: true,
    speed: 1000,
    freemode: true,
    navigation: true,
    autoplay: {delay: 2000},
    pagination: { clickable: true },
    fadeEffect: {crossFade: true},
  }

  constructor(private db: BlogService) { }

  ngOnInit(): void {
    this.items$ = this.db.getPosts(1, 4).pipe(map((res) => res.body));
  }
  onSlideChange = (ev: any) => this.slide = ev.realIndex;

  trackByFunction = (index: number, item: any): number => item[index];

}
