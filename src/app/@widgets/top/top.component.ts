import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { slideInOut, slideLeftInOut } from '@core/animations/slide';
import { DataService } from '@core/services/data.service';
import { UtilService } from '@core/services/util.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
    animations: [slideInOut, slideLeftInOut]
})
export class TopComponent implements OnInit {


    @Input() entrada: boolean = false;
    @Output() salida = new EventEmitter<boolean>();

    loja: any = [];
    @Input() json: any = [];
    @Input() items: any = [];
    ofertas: Observable<any>;

    activeSidebar: string = 'out';



    constructor(
      private router: Router,
      private db: DataService, private util: UtilService) { }

    ngOnInit(): void {
      this.ofertas = this.db.getMenuOfertas('menuDepartamento');
      this.loja = this.util.StorageParse('Loja');
    }

    toog = (ev: any) => console.log(ev);

    toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';

    toogle = (ev?: any) => {
      if (ev) this.entrada = ev;
      this.entrada = !this.entrada;
      this.salida.emit(this.entrada);
    }


  onLink = (slug: string) => this.router.navigateByUrl(`/${slug}`);

  trackByFunction = (index: number, item: any) => item[index];

  desligueSidebar = (ev: any) => this.activeSidebar = ev;

}
