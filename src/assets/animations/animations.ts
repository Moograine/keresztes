import { animate, sequence, state, style, transition, trigger } from '@angular/animations';

export const bounceAnimation = trigger('bounce', [
  state('hidden', style({})),
  state('rendered', style({})),
  transition('hidden => rendered', sequence([
    style({transform: 'translateX(-100%)'}),
    animate("300ms cubic-bezier(0,0,0,1)", style({ transform: 'translateX(8%)' })),
    animate("260ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(-7%)' })),
    animate("220ms cubic-bezier(0,0,0,1)", style({ transform: 'translateX(6%)' })),
    animate("180ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(-5%)' })),
    animate("150ms cubic-bezier(0,0,0,1)", style({ transform: 'translateX(4%)' })),
    animate("130ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(-3%)' })),
    animate("100ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(2%)' })),
    animate("80ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(-1%)' })),
    animate("50ms cubic-bezier(1,0,1,1)", style({ transform: 'translateX(0)' })),
  ])),
])

export const fadeAnimation = trigger('fade', [
  state('hidden', style({opacity: 0})),
  state('rendered', style({opacity: 1})),
  transition('hidden <=> rendered', animate(200))
])

export const fadeOnEnter = trigger('fadeOnEnter', [
  transition(':enter', [ style({ opacity: 0 }), animate(200) ]),
  transition(':leave', animate(200, style({ opacity: 0 })))
])

export const underlineAnimation = trigger('underline', [
  state('hidden', style({opacity: 0})),
  state('rendered', style({opacity: 1})),
  transition('hidden => rendered', animate(200))
])

export const slideDownAnimation = trigger('slideDown', [
  state('hidden', style({transform: 'translateY(-100%)'})),
  state('rendered', style({transform: 'translateY(0)'})),
  transition('hidden => rendered', animate("350ms cubic-bezier(0,0,0,1)"))
])

export const slideUpTextAnimation = trigger('slideUpText', [
  state('hidden', style({transform: 'translateY(250%)', opacity: 0})),
  state('rendered', style({transform: 'translateY(0)'})),
  transition('hidden => rendered', animate("500ms 250ms cubic-bezier(0,0,0,1)"))
])
