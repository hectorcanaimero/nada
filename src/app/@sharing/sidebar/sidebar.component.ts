import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() json: any = [];
  @Input() items: any = [];
  @Input() entrada: boolean = false;
  @Output() salida = new EventEmitter<boolean>();

  active1: boolean = true;
  active2: boolean = true;
  toogle1: boolean = false;

  ofertas: Observable<any>;


  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.ofertas = this.api.getMenuOfertas('menuDepartamento');
  }

  active = () => this.toogle1 = !this.toogle1;
  submenu1 = () => this.active1 = !this.active1;
  submenu2 = () => this.active2 = !this.active2;

  toogle = (ev?: any) => {
    if (ev) this.entrada = ev;
    this.entrada = !this.entrada;
    this.salida.emit(this.entrada);
  }

}
