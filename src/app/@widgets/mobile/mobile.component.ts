import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import {filter, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewsService } from '@core/services/news.service';
import { DataService } from '@core/services/data.service';
import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { slideDownInOut, slideLeftInOut } from '@core/animations/slide';

import { MenuDepartamento } from '@core/interfaces/menu';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  animations: [ slideDownInOut, slideLeftInOut ]
})

export class MobileComponent implements OnInit {

  @ViewChild('search') search: ElementRef;

  @Output() salida = new EventEmitter<boolean>();

  @Input() activeSidebar :string = 'out';
  activeMenuOfertas: string = 'out';

  @Input() items: any = [];
  @Input() condor: any = [];
  menuOfertas$: Observable<any>;
  category: Observable<any>;

  faleConosco = [];


  constructor(
    private router: Router,
    private seo: SeoService,
    private db: DataService,
    private news: NewsService,
    private util: UtilService,
  ) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.convertFaleConosco();
    this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
  }

  toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
  toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';


  convertFaleConosco = () => {
    this.condor.sac.forEach(el => this.faleConosco.push(el));
    this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
    this.condor.denuncia.forEach(el => this.faleConosco.push(el));
    this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' })

  }
  onLink = (slug: string) => {
    const validate = slug.startsWith('http');
    if (validate) window.open(slug, '_blank');
    else this.router.navigateByUrl(slug);
    this.activeSidebar = 'out';
  }

  onToogle = (ev: any) =>  this.activeSidebar = ev;

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

  // toog = (ev) => this.entrada = false;
  Click = (event) => {
    if (event.keyCode === 13) {
      if (! event.target.value) return;
      this.seo.dataLayerTracking({ event: 'blogsearch', searchTerm: event.target.value });
      return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
    }
  }
}
