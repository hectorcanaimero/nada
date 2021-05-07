import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() code: any = [];
  @Input() size: string = '';
  @Input() idImage: string = '';

  ngOnInit() {
  }
}
