import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  @Input() titulo: string;
  @Input() data: any=  [];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFunction = (index: number, item: any) => item[index];

}
