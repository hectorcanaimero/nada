import { Component, Input } from '@angular/core';

@Component({
  selector: 'helper-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  @Input() titulo: string;
  @Input() icon?: string;
  @Input() link?: string = '';
}
