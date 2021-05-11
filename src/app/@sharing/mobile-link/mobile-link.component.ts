import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { slideDownInOut } from '@core/animations/slide';

@Component({
  selector: 'app-mobile-link',
  templateUrl: './mobile-link.component.html',
  styleUrls: ['./mobile-link.component.scss'],
  animations:[slideDownInOut]
})

export class MobileLinkComponent {

  @Input() items: any = [];
  @Input() titulo: string = '';
  @Output() toogle = new EventEmitter();

  active: string = 'out';
  height: string = '0px';

  constructor(private router: Router) { }

  toogleSubMenu = () => {
    this.active = this.active === 'out' ? 'in' : 'out';
  }

  onLink = (slug: string) => {
    this.router.navigateByUrl(slug);
    this.toogle.emit('out');
  }
}
