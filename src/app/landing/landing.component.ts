import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { bounceAnimation, fadeAnimation } from '../../assets/animations/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    bounceAnimation,
    fadeAnimation
  ]
})
export class LandingComponent implements OnInit {
  @ViewChild('item') item: ElementRef | undefined;
  contentBox = [
    [17, 23, 33, 27],
    [28, 22, 27, 23],
    [27, 13, 23, 37],
    [22, 18, 13, 47],
    [17, 23, 33, 27],
    [47, 13, 18, 22],
    [27, 13, 23, 37],
    [17, 23, 33, 27]
  ];
  showContent = false;
  activeArticle = false;

  constructor() {
  }

  ngOnInit() {
    this.initializeAnimations();
  }

  initializeAnimations(): void {
    setTimeout((): void => {
      this.activeArticle = true;
    }, 750);
  }

  @HostListener('window:scroll')
  scrollListener() {
    if (this.item?.nativeElement.offsetTop <= window.scrollY + window.innerHeight) {
      this.showContent = true;
    }
  }
}
