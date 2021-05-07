import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilService } from 'src/app/shared/services/util.service';

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


    constructor( private api: ApiService, private util: UtilService) { }

    ngOnInit(): void {
      this.ofertas = this.api.getMenuOfertas('menuDepartamento');
      this.loja = this.util.StorageParse('Loja');
    }

    toog = (ev: any) => console.log(ev);

    toogle = (ev?: any) => {
      if (ev) this.entrada = ev;
      this.entrada = !this.entrada;
      this.salida.emit(this.entrada);
    }

  trackByFunction = (index: number, item: any) => item[index];

}
