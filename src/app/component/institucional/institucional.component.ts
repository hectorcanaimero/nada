import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  items: any = [];

  constructor(
    private news: NewsService
  ) { }

  ngOnInit(): void {
    this.Pages();
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  Pages() {
    const query = `?include[]=5&include[]=10&include[]=12&include[]=14`;
    this.subscription = this.news.PageCollection(query).subscribe(
      res => this.items = res,
      err => console.log(err)
    );
  }

}
