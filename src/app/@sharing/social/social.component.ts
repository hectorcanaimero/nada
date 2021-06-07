import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent  {

  @Input() items: any = [];

  trackBy = (index: number, item: any) => item[index];
}
