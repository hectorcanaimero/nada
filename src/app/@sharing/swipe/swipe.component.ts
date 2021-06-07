import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { EffectFade,   Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {

  @Input() options: { };
  @Input() data: any = [];
  @Input() code: any = [];
  @Input() size: any = [];
  @Input() idImage: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSwiper = (swiper) => { }
  onSlideChange = () => { }

  trackByFunction = (index: number, item: any): number => item[index];

}
