import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable, timer } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';


@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {


    @Input() entrada: boolean = false;
    @Output() salida = new EventEmitter<boolean>();

    loja: any = [];
    @Input() json: any = [];
    @Input() items: any = [];
    ofertas: Observable<any>;

    active1: boolean = true;
    active2: boolean = true;
    toogle1: boolean = false;

    constructor( private api: ApiService, private util: UtilService) { }

    ngOnInit(): void {
      this.ofertas = this.api.getMenuOfertas('menuDepartamento');
      this.loja = this.util.StorageParse('Loja');
    }

    active = () => this.toogle1 = !this.toogle1;
    submenu1 = () => this.active1 = !this.active1;
    submenu2 = () => this.active2 = !this.active2;

    toog = (ev) => console.log(ev);

    toogle = (event?) => {
      if (event) this.entrada = event;
      this.entrada = !this.entrada;
      this.salida.emit(this.entrada);
    }

}
