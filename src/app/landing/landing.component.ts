import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FreshService } from '../../assets/services/fresh.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('background') background: ElementRef | undefined;
  @ViewChildren('textToBeAnimated') textToBeAnimated: QueryList<any> | undefined;

  constructor(private router: Router, private fresh: FreshService) {
  }

  ngAfterViewInit() {
    this.prepareLinesForAnimation();
    this.prepareLoadingAnimation();
  }

  prepareLoadingAnimation(): void {
    if (this.fresh.isApplicationFresh) {
      this.background?.nativeElement.classList.add('welcome-animation');
    }
  }

  prepareLinesForAnimation(): void {
    if (this.textToBeAnimated) {
      for (let wrapper of this.textToBeAnimated) {
        const words = wrapper.nativeElement.innerText
          .replace(/\t/g, ' ')
          .replace(/\r/g, ' ')
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .split(' ');
        wrapper.nativeElement.innerHTML = '<span><span>' + words.join('</span></span> <span><span>') + '</span></span>';
        const lines = [];
        for (let child of wrapper.nativeElement.children) {
          if (lines.indexOf(child.offsetTop) === -1) {
            lines.push(child.offsetTop);
          }
          const parentClassList = [
            'overflow-hidden',
            'd-inline-block'
          ]
          const childClassList = [
            'slide-up',
            'd-inline-block'
          ]
          child.classList.add(...parentClassList);
          child.firstChild.classList.add(...childClassList);
          child.firstChild.style.opacity = 0;
        }
      }
    }
  }

  navigateToContact(): void {
    this.router.navigate(['contact']).then();
  }

  @HostListener('window:scroll')
  scrollListener() {
    if (this.background?.nativeElement.firstChild && window.scrollY) {
      const scaleHorizontalVertical = 1 - 0.00033 * window.scrollY;
      const moveVertical = .25 * window.scrollY;
      this.background.nativeElement.firstChild.style.transition = '';
      this.background.nativeElement.firstChild.style.transform =
        `matrix(${scaleHorizontalVertical}, 0, 0, ${scaleHorizontalVertical}, 0, ${moveVertical})`;
      setTimeout((): void => { /* Avoid scroll detection problems, in case of sudden scroll movements */
        if(window.scrollY === 0 && this.background?.nativeElement.firstChild) {
          this.background.nativeElement.firstChild.style.transition = 'transform .25s';
          this.background.nativeElement.firstChild.style.transform =
            `matrix(1, 0, 0, 1, 0, 0)`;
        }
      }, 50);
    }

    if (this.textToBeAnimated) {
      for (let textWrapper of this.textToBeAnimated) {
        if (!textWrapper.nativeElement.classList.contains('animated') &&
          textWrapper.nativeElement.offsetTop <= window.scrollY + window.innerHeight) {
          textWrapper.nativeElement.classList.add('animated');
          for (let i = 0; i < textWrapper.nativeElement.children.length; i++) {
            textWrapper.nativeElement.children[i].firstChild.animate(
              [
                { transform: 'translateY(100%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 },
              ],
              {
                duration: 200 + i * 15,
                delay: 50,
                fill: 'forwards'
              }
            );
          }
        }
      }
    }
  }
}
