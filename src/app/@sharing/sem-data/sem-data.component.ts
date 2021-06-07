import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem-data',
  templateUrl: './sem-data.component.html',
  styleUrls: ['./sem-data.component.scss']
})
export class SemDataComponent implements OnInit {

  @Input() height = '80vh';
  constructor() { }

  ngOnInit(): void {
  }

}
