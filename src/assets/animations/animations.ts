import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeOnEnter = trigger('fadeOnEnter', [
  state('hidden', style({ transform: 'translateX(100%)' })),
  state('rendered', style({ transform: 'translateX(0)' })),
  transition('hidden <=> rendered', animate(200))
])

export const slideDownAnimation = trigger('slideDown', [
  state('hidden', style({ transform: 'translateY(-100%)' })),
  state('rendered', style({ transform: 'translateY(0)' })),
  transition('hidden => rendered', animate('350ms cubic-bezier(0,0,0,1)'))
])

export const slideUpTextAnimation = trigger('slideUpText', [
  state('hidden', style({ transform: 'translateY(250%)', opacity: 0 })),
  state('rendered', style({ transform: 'translateY(0)' })),
  transition('hidden => rendered', animate('500ms 250ms cubic-bezier(0,0,0,1)'))
])

export const hamburgerAnimation = trigger('hamburger', [
  state('hamburger', style({ margin: '.4rem' })),
  state(
    'topX',
    style({
      transform: 'rotate(45deg) translate(4px, 10px)',
      transformOrigin: 'left',
      margin: '1.05rem',
      background: 'DimGrey'
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
      transform: 'translateX(40%)'
    })
  ),
  state(
    'bottomX',
    style({
      transform: 'rotate(-45deg) translate(4px, -10px)',
      transformOrigin: 'left',
      margin: '1.05rem',
      background: 'DimGrey'
    })
  ),
  transition('* => *', [
    animate('300ms 50ms'),
  ]),
])
