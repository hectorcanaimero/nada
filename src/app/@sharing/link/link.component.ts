import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() item: any = [];
  @Input() class: string = '';
  @Input() style: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
