import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Categories, Post } from '@core/interfaces/blog';
import { BlogService } from '@core/services/blog.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() tag: number;
  @Input() type: string = 'list';
  @Input() categoria: number;
  @Input() titulo: string = 'list';

  categories$: Observable<Categories>;
  tags$: Observable<any>;
  items$: Observable<Post[]>;

  constructor(
    private db: BlogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.categoria)  {
      this.items$ = this.db.getPostsCategories(this.categoria, 5).pipe(map((res) => res.body));
    } else {
      this.items$ = this.db.getPostsTags(this.tag, 5).pipe(map((res) => res.body));
    }
  }

  onBlogId = (slug: string) => this.router.navigateByUrl(`/blog/${slug}`);

  trackBy = (index: number, item: any) => item[index];

}
