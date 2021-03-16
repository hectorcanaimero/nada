import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helper-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() menu: any = [];
  active: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.active = true;
  }

  submenu() {
    this.active = !this.active;
  }

}
