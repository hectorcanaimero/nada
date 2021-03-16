import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helper-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  @Input() menu: any = [];
  @Input() active?: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  submenu() {
    this.active = !this.active;
  }
}
