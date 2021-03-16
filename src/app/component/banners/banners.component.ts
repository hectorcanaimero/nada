import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Subscription, forkJoin, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})

export class BannersComponent implements OnInit {

  mobile: any = [];
  items: Observable<any>;

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.items = this.news.getBanners$().pipe(
      debounceTime(500), map((res) => {
        if(res) {
          return {
            left: res['filter']((rows) => rows.position === 'middle-left'),
            center: res['filter']((rows) => rows.position === 'middle-center'),
            right: res['filter']((rows) => rows.position === 'middle-right')
          }
        }
      }),
      tap((res) => {
        this.mobile.push(res.left[0]);
        this.mobile.push(res.center[0]);
        this.mobile.push(res.right[0]);
      })
    );
  }
}
