import { Component, Input } from '@angular/core';

@Component({
  selector: 'helper-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent  {

  @Input() items: any = [];

}
