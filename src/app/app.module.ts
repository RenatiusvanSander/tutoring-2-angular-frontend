import { NgModule, provideZoneChangeDetection } from '@angular/core';
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
import { AvailableSpacesComponent } from './available-spaces/available-spaces.component';
import { ContactComponent } from './contact/contact.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { OverviewComponent } from './overview/overview.component';
import { includeBearerTokenInterceptor } from 'keycloak-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideKeycloakApp } from './app.provide-keycloak';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './settings/address/address/address.component';
import { AddAddressComponent } from './settings/Address/add-address/add-address.component';
import { EditAddressComponent } from './settings/Address/edit-address/edit-address.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteAddressComponent } from './settings/address/delete-address/delete-address.component';

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
    AvailableSpacesComponent,
    ContactComponent,
    DisclaimerComponent,
    NewsletterComponent,
    EmailComponent,
    PhoneComponent,
    TutoringComponent,
    OverviewComponent,
    SettingsComponent,
    AddressComponent,
    AddAddressComponent,
    EditAddressComponent,
    DeleteAddressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideRouter(app_routes),
    provideKeycloakApp(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
