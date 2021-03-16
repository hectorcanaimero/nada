import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword = 'loja';
  @Input() items: any = [];
  loja: any = [];
  data: any = [];

  constructor(
    private api: ApiService,
    private util: UtilService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.loja = this.util.StorageParse('Loja');
  }

  getSearch = (event: any) => {

    if (event.keyCode === 13) this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);

    // if (event.keyCode === 13) {
    //   this.seo.dataLayerTracking({
    //     event: 'siteSearch',
    //     searchTerm: event.target.value
    //   });
    //   const hyphen = event.target.value.replace(/\s+/g, '-').toLowerCase();
    //   const pesquisa = event.target.value.replace(/\s+/g, '%20').toLowerCase();
    //   this.api.getProductSearch(`${pesquisa}`).subscribe(
    //     row => {
    //       if (row.length > 0) {
    //         return this.router.navigate([`pesquisa-usuario/${hyphen}`]);
    //       } else {
    //         this.msg.sweetalert('', '', 'info', 'center');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );
    // }
  }
}
