import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MenuDepartamento } from '@core/interfaces/menu';
import { DataService } from '@core/services/data.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() json: any = [];
  campanha: Observable<any>;
  items: Observable<MenuDepartamento>;

  constructor( private db: DataService ) { }

  ngOnInit(): void {
    this.items = this.db.getMenuOfertas('menuDepartamento');
  }

  trackByFunction = (index: number, item: any) => item[index];

}
