import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '@core/interfaces/blog';
import { BlogService } from '@core/services/blog.service';

@Component({
  selector: 'app-blog-latest',
  templateUrl: './blog-latest.component.html',
  styleUrls: ['./blog-latest.component.scss']
})
export class BlogLatestComponent implements OnInit {

  @Input() data: Observable<any>;
  @Input() titulo: string = '';
  @Input() column: string = 'col-md-6';

  itemsPerPage: number = 6;
  currentPage: number = 1;
  totalItem: any = 0;
  items$: Observable<Post[]>;

  constructor(
    private db: BlogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.items$  =this.data.pipe(
      delay(300),
      tap((res) => this.totalItem = res.headers.keys().map(key => res.headers.get(key))[4]),
      map((res) => res.body)
    )
  }

  pageChanged = (ev: any) => {
    this.currentPage = ev++;
    this.items$ = this.db.getPosts(this.currentPage, this.itemsPerPage).pipe(map((res) => res.body));
    console.log(this.currentPage);
  }

  onBlogId = (slug: string) => this.router.navigateByUrl(`/blog/${slug}`);
  trackBy = (index: number, item: any) => item.id;

}
