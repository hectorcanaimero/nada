import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'helper-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() code: any = [];
  @Input() idImage?: string = '';
  @Input() size?: string;
  imagem: any = [];
  default = ``;

  ngOnInit() {
  }
}
