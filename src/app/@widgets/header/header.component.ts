import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() items: any = [];

  keyword = 'loja';
  loja: any = [];

  constructor(
    private router: Router,
    private api: ApiService,
    private util: UtilService,
  ) { }


  ngOnInit() {
    this.loja = this.util.StorageParse('Loja');
  }

  getSearch = (event: any) => {
    if (event.keyCode === 13) this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
  }

  trackByFunction = (index: number, item: any) => item[index];
}
