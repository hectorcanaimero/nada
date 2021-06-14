import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})

export class BannersComponent implements OnInit {

  mobile: any = [];
  isLoading: boolean = false;
  items: Observable<any>;

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.isLoading = true;
    this.items = this.news.getBanners$().pipe(
      map((res) => {
        return {
          left:   res?.filter((rows) => rows.position === 'middle-left'),
          center: res?.filter((rows) => rows.position === 'middle-center'),
          right:  res?.filter((rows) => rows.position === 'middle-right')
        }
      }),
      tap((res) => {
        this.mobile?.push(res?.left[0]);
        this.mobile?.push(res?.center[0]);
        this.mobile?.push(res?.right[0]);
      }),
      finalize(() => this.isLoading = false)
    );
  }
  trackBy = (index: number, item: any) => item.id;
}
