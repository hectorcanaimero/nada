import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '@core/services/news.service';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent implements OnInit {

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

  onSearch(ev: any) {
    if (ev.keyCode === 13) {
      return this.router.navigate(['blog', 'search', this.util.toSlug(ev.target.value)]);
    }
  }
}
