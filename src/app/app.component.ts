import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { slideDownAnimation } from '../assets/animations/animations';
import { FreshService } from '../assets/services/fresh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideDownAnimation
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('footer') footer: ElementRef | undefined;
  title = 'kereszteszs';
  showHeader = false;
  showFooter = false;

  constructor(private fresh: FreshService) {
  }

  ngOnInit() {
    this.initializeAnimations();
    this.fresh.changeStatus();
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
