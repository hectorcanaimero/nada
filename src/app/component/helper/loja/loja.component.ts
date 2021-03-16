import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helper-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  @Input() loja: any = [];

  constructor() { }

  ngOnInit() {
  }

}
