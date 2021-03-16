import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Subscription, ObservableLike, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  images: Subscription;
  items: any = [];
  image: Observable<any[]>;

  constructor(
    private news: NewsService
  ) { }

  ngOnInit(): void {
    this.news.Blog(1, 3).subscribe(res => this.items = res.body);
  }

  ngOnDestroy(): void {
    if (this.images) { this.images.unsubscribe(); }
  }

  Image() {

  }
}
