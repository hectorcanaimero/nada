import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const slideLeftInOut = trigger('slideLeftInOut', [
  state('in', style({ transform: 'translateX(0)', 'background-color': 'rgba(0, 0, 0, .8)' })),
  state('out', style({ transform: 'translateX(-100%)', 'background-color': 'rgba(0, 0, 0, 0)' })),
  transition('* => *', animate('.5s ease-in-out')),
]);

export const slideDownInOut = trigger('slideDownInOut', [
  state('in', style({ 'max-height': '500px', 'opacity': '1', 'visibility': 'visible' })),
  state('out', style({ 'max-height': '0px', 'opacity': '0', 'visibility': 'hidden' })),
  transition('in => out', [group(
    [
      animate('400ms ease-in-out', style({ 'opacity': '0' })),
      animate('600ms ease-in-out', style({ 'max-height': '0px' })),
      animate('700ms ease-in-out', style({ 'visibility': 'hidden' }))
    ]
  )]),
  transition('out => in', [group(
    [
      animate('1ms ease-in-out', style({ 'visibility': 'visible' })),
      animate('600ms ease-in-out', style({ 'max-height': '500px' })),
      animate('800ms ease-in-out', style({ 'opacity': '1' }))
    ]
  )])
]);
