import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { bounceAnimation, fadeAnimation, slideDownAnimation } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    bounceAnimation,
    fadeAnimation,
    slideDownAnimation
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('footer') footer: ElementRef | undefined;
  title = 'kereszteszs';
  showHeader = false;
  showFooter = false;

  ngOnInit() {
    this.initializeAnimations();
  }

  initializeAnimations(): void {
    setTimeout((): void => {
      this.showHeader = true;
    }, 1250);
  }

  @HostListener('window:scroll')
  scrollListener() {
    if (this.footer?.nativeElement.offsetTop + 50 <= window.scrollY + window.innerHeight) {
      this.showFooter = true;
    }
  }

}
