import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '@core/services/news.service';
import { Page } from '@core/interfaces/news';

@Component({
  selector: 'app-lgpd',
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.scss']
})
export class LgpdComponent implements OnInit {

  items$: Observable<Page>;

  constructor(private db: NewsService) { }

  ngOnInit(): void {
    this.items$ = this.db.PageSlug('politica-de-privacidade');
  }

}
