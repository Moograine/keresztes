import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TermsComponent } from './footer/terms/terms.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { RefundComponent } from './footer/refund/refund.component';
import { AboutComponent } from './landing/about/about.component';
import { WorkComponent } from './landing/work/work.component';
import { ContactComponent } from './landing/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'terms-of-service',
    component: TermsComponent
  },
  {
    path: 'refund-policy',
    component: RefundComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
