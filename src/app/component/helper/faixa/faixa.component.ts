import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helper-faixa',
  templateUrl: './faixa.component.html',
  styleUrls: ['./faixa.component.scss']
})
export class FaixaComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
