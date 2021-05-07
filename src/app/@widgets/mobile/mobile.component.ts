import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {filter, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewsService } from '@core/services/news.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { UtilService } from 'src/app/shared/services/util.service';



@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})

export class MobileComponent implements OnInit {

  @ViewChild('search') search: ElementRef;

  @Input() entrada: boolean = false;
  @Output() salida = new EventEmitter<boolean>();

  active: boolean = true;
  active1: boolean = true;
  activeBlog: boolean = false;

  @Input() items: any = [];
  @Input() condor: any = [];
  ofertas: Observable<any>;
  category: Observable<any>;

  constructor(
    private seo: SeoService,
    private api: ApiService,
    private news: NewsService,
    private util: UtilService,
    private router: Router
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      const url = event['url'].split('/').find(element => element === 'blog');
      if (url) this.activeBlog = true;
      else this.activeBlog = false;
    });
  }

  ngOnInit(): void {
    this.getOfertas();
    this.getCategory();
  }

  toogle = () => {
    this.entrada = !this.entrada;
    this.salida.emit(this.entrada);
  }

  submenu = () => this.active = !this.active;
  submenu1 = () => this.active1 = !this.active1;


  getOfertas = () => {
    this.ofertas = this.api.getMenuOfertas('menuDepartamento');
  }

  getSearch = (event: any) => {
    if (event.keyCode === 13) {
      if (! event.target.value) return;
      return this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
    }
  }

  getSearchClick = () => {
    if (! this.search.nativeElement.value) return;
    return this.router.navigate(['pesquisa-usuario', this.util.toSlug(this.search.nativeElement.value)]);
  }

  getCategory = () => this.category = this.news.getBlogCollection('categories?orderby=count&order=desc&per_page=10')
                    .pipe(map(res => res.body));

  goToCategory = (e: any) => this.router.navigate(['/blog', 'categoria', e.target.value]);
  goToDepartamento = (e: any) => this.router.navigate(['/departamento', e.target.value]);

  toog = (ev) => this.entrada = false;
  Click = (event) => {
    if (event.keyCode === 13) {
      if (! event.target.value) return;
      this.seo.dataLayerTracking({ event: 'blogsearch', searchTerm: event.target.value });
      return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
    }
  }
}
