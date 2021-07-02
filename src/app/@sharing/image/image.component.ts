import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() code: any = [];
  @Input() size: any = [];
  @Input() idImage: string = '';

  ngOnInit() {
  }

  match = (url: string) => {
    const text = `${url}`.toLowerCase().includes('http');
    return text;
  }
}
