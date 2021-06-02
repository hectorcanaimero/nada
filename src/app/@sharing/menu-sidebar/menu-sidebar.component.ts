import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { slideLeftInOut, slideDownInOut } from '@core/animations/slide';
import { DataService } from '@core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  animations: [slideDownInOut]
})

export class MenuSidebarComponent implements OnInit {

  @Input() items: any = [];
  @Input() condor: any = [];
  @Input() activeSidebar: string = 'out';
  @Output() outputSidebar = new EventEmitter;
  activeMenuOfertas: string = 'out';
  faleConosco: any = [];

  menuOfertas$: Observable<any>;

  constructor(
    private router: Router,
    private db: DataService) { }

  ngOnInit(): void {
    this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
    this.convertFaleConosco();
  }

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
    this.outputSidebar.emit('out');
  }

  onLink2 = () => {
    this.activeSidebar = 'out';
    this.outputSidebar.emit('out');
  }

  onToogle=(ev) => {
    this.activeSidebar = ev;
    this.outputSidebar.emit(ev);
  }

  toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';


}
