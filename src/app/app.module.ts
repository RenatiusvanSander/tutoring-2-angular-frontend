import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FrontendStatusComponent } from './frontend-status/frontend-status.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { app_routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontendStatusComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [provideRouter(app_routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
