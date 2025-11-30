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
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideKeycloakApp } from './app.provide-keycloak';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './settings/Address/address/address.component';
import { AddAddressComponent } from './settings/Address/add-address/add-address.component';
import { EditAddressComponent } from './settings/Address/edit-address/edit-address.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteAddressComponent } from './settings/Address/delete-address/delete-address.component';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ServiceContractPriceComponent } from './overview/service-contract-price/service-contract-price.component';
import { ServiceContractComponent } from './service-contract/service-contract.component';
import { PriceComponent } from './price/price.component';
import { AddServiceContractComponent } from './service-contract/add-service-contract/add-service-contract.component';
import { AddPriceComponent } from './price/add-price/add-price.component';
import { PriceUpdateComponent } from './price/price-update/price-update.component';
import { AddServiceContractPriceComponent } from './overview/service-contract-price/add-service-contract-price/add-service-contract-price.component';

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
    DeleteAddressComponent,
    AdminComponent,
    ForbiddenComponent,
    ServiceContractPriceComponent,
    ServiceContractComponent,
    PriceComponent,
    AddServiceContractComponent,
    AddPriceComponent,
    PriceUpdateComponent,
    AddServiceContractPriceComponent
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
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor]),withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
