import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '@core/interfaces/blog';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-widget-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  items$: Observable<Post[]>;

  constructor(
    private db: NewsService
  ) { }

  ngOnInit(): void {
    this.items$ = this.db.Blog(1, 4).pipe(map(res => res.body));
  }

  trackByFunction = (index: number, item: Post): number => item[index];
}
