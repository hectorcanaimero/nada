import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { MenuDepartamento } from 'src/app/shared/services/interfaces/menu';



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

  trackByFunction = (index: number, item: any) => item[index];

}
