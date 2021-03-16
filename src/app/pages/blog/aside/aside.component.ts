import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { UtilService } from '../../../shared/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  category: any = [];

  constructor(
    private router: Router,
    private news: NewsService,
    private util: UtilService
  ) { }

  ngOnInit(): void {
    this.Category();
  }


  Category() {
    const query = 'categories?orderby=count&order=desc&per_page=10';
    this.news.getBlogCollection(query).subscribe(
      res => this.category = res.body );
  }

  Click(event) {
    if (event.keyCode === 13) {
      return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
    }
  }
}
