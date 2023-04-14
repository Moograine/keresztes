import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {fadeOnEnter, hamburgerAnimation} from '../../assets/animations/animations';

interface Item {
  path: 'about' | 'work' | 'contact',
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-signature.scss'],
  animations: [
    fadeOnEnter,
    hamburgerAnimation
  ]
})

export class HeaderComponent {
  @ViewChild('credit') credit: ElementRef | undefined;
  @ViewChild('signature') signature: ElementRef | undefined;

  readonly styleTag: HTMLStyleElement;

  activePhoneMenu = false;
  activeCredit = false;
  menuItems: Array<Item> = [{
    path: 'about',
    label: 'About'
  }, {
    path: 'work',
    label: 'Work'
  }, {
    path: 'contact',
    label: 'Contact'
  }
  ];

  constructor(private router: Router) {
    this.styleTag = this.buildStyleElement();
  }

  buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        position: fixed;
      }
    `;
    return style;
  }

  togglePhoneMenu(): void {
    this.activePhoneMenu = !this.activePhoneMenu;
    this.activePhoneMenu ?
      document.body.appendChild(this.styleTag) : this.closePhoneMenu();
  }

  closePhoneMenu(): void {
    this.activePhoneMenu = this.activeCredit = false;
    this.credit?.nativeElement.classList.remove('hide');
    this.signature?.nativeElement.classList.remove('show', 'hide');
    document.body.removeChild(this.styleTag);
    window.scroll({top: 0})
  }

  navigateTo(itemPath: '' | 'about' | 'work' | 'contact'): void {
    const menuItemAnimation = this.activePhoneMenu ? 100 : 0;
    setTimeout((): void => {
      this.router.navigate([itemPath]).then();
      if (this.activePhoneMenu) {
        this.closePhoneMenu();
      }
    }, menuItemAnimation);
  }

  animateCredit(): void {
    this.activeCredit = !this.activeCredit;
    if (this.activeCredit) {
      this.credit?.nativeElement.classList.add('hide');
      this.signature?.nativeElement.classList.remove('hide');
      setTimeout((): void => {
        this.signature?.nativeElement.classList.add('show');
      }, 100)
    } else {
      this.credit?.nativeElement.classList.remove('hide');
      this.signature?.nativeElement.classList.remove('show');
      this.signature?.nativeElement.classList.add('hide');
    }
  }
}
