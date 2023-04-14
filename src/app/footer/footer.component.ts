import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';
import { slideUpTextAnimation } from '../../assets/animations/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    slideUpTextAnimation
  ]
})
export class FooterComponent {
  @Input() activateAnimation: boolean = false;

  constructor(private router: Router) {
  }

  navigateTo(path: 'terms-of-service' | 'refund-policy' | 'privacy-policy'): void {
    this.router.navigate([path]).then();
  }
}
