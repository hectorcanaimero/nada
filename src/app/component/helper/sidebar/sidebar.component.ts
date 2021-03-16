import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { NewsService } from 'src/app/shared/services/news.service';
import { Post } from 'src/app/shared/services/interfaces/news';

@Component({
  selector: 'helper-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionOne: Subscription;
  items: any = [];
  noticias: Observable<Post[]>;

  constructor(
    private news: NewsService
  ) { }

  ngOnInit(): void {
    this.Pages();
    this.News();
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
    if (this.subscriptionOne) { this.subscriptionOne.unsubscribe(); }
  }

  Pages() {
    const query = `?include[]=97&include[]=104`;
    this.subscription = this.news.PageCollection(query).subscribe(
      res => this.items = res,
      err => console.log(err)
    );
  }

  News() {
    this.noticias = this.news.LastNews(5);
  }

}
