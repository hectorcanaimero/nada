import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Observable } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items: Observable<any>;

  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.getImage();
  }


  getImage() {
    this.items = this.news.getBanners$().pipe(
      debounceTime(700),
      map((res) => {
        if(res) {
          return { left: res['filter']((rows) => rows.position === 'top-left'), right: res['filter']((rows) => rows.position === 'top-right') }
        }
      })
    );
  }
}
