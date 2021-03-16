import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { MenuDepartamento } from '../../services/interfaces/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() json: any = [];
  campanha: Observable<any>;
  items: Observable<MenuDepartamento>;

  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.items = this.api.getMenuOfertas('menuDepartamento');
  }

}
