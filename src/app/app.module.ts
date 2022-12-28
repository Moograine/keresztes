import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './footer/terms/terms.component';
import { RefundComponent } from './footer/refund/refund.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './landing/about/about.component';
import { WorkComponent } from './landing/work/work.component';
import { ContactComponent } from './landing/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TermsComponent,
    RefundComponent,
    PrivacyComponent,
    LandingComponent,
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
