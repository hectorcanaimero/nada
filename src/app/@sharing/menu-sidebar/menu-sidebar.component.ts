import { Component, Input, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { slideLeftInOut, slideDownInOut } from '@core/animations/slide';
import { DataService } from '@core/services/data.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  animations: [ slideLeftInOut, slideDownInOut]
})

export class MenuSidebarComponent implements OnInit {

  @Input() items: any = [];
  @Input() condor: any = [];
  @Input() activeSidebar: string = 'out';
  activeMenuOfertas: string = 'out';
  faleConosco: any = [];

  menuOfertas$: Observable<any>;

  constructor( private db: DataService) { }

  ngOnInit(): void {
    this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
    timer(300).subscribe(() => this.convertFaleConosco());
  }

  convertFaleConosco = () => {
    this.condor.sac.forEach(el => this.faleConosco.push(el));
    this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
    this.condor.denuncia.forEach(el => this.faleConosco.push(el));
    this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' })

  }

  onLink = (slug: string) => console.log(slug);

  onToogle=(ev) => console.log(ev);

  toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';


}
