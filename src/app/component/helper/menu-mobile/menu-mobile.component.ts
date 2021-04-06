import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'helper-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  @Input() menu: any = [];
  @Input() active?: boolean = true;

  @Output() toogle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submenu() {
    this.active = !this.active;
  }

  onToogle = () => this.toogle.emit(false);
}
