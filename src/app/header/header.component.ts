import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeOnEnter } from '../../assets/animations/animations';

interface Item {
  path: 'about' | 'work' | 'contact',
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeOnEnter
  ]
})

export class HeaderComponent {
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

  open(): void {
    this.activePhoneMenu = true;
  }

  close(): void {
    this.activePhoneMenu = this.activeCredit = false;
  }

  constructor(private router: Router) {
  }

  navigateTo(itemPath: '' | 'about' | 'work' | 'contact'): void {
    this.router.navigate([itemPath]).then();
    this.activePhoneMenu = this.activeCredit = false;
  }

  showCredit(): void {
    this.activeCredit = true;
  }
}
