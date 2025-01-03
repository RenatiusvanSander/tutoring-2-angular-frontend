import { APP_INITIALIZER, importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FrontendStatusComponent } from './frontend-status/frontend-status.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { app_routes } from './app.routes';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoSignInComponent } from './info-sign-in/info-sign-in.component';
import { MaterialsShopComponent } from './materials-shop/materials-shop.component';
import { EducationalInstitutionsComponent } from './educational-institutions/educational-institutions.component';
import { CapacitiesComponent } from './capacities/capacities.component';
import { RegisterComponent } from './register/register.component';
import { AvailablesPracesComponent } from './availables-praces/availables-praces.component';
import { ContactComponent } from './contact/contact.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { OverviewComponent } from './overview/overview.component';
import { KeycloakService } from './services/keycloak/keycloak.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { allInterceptorProviders } from './app.interceptors';

export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontendStatusComponent,
    WelcomeComponent,
    AboutUsComponent,
    InfoSignInComponent,
    MaterialsShopComponent,
    EducationalInstitutionsComponent,
    CapacitiesComponent,
    RegisterComponent,
    AvailablesPracesComponent,
    ContactComponent,
    DisclaimerComponent,
    NewsletterComponent,
    EmailComponent,
    PhoneComponent,
    TutoringComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [
    provideRouter(app_routes),
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi()),
    allInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
