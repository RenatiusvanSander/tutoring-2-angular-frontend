import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { FrontendStatusComponent } from "./frontend-status/frontend-status.component";

export const app_routes: Routes = [
    {
        path: '', component : WelcomeComponent
    },
    {
        path: 'welcome', component : WelcomeComponent
    },
    {
        path: 'login', component : LoginComponent
    },
    {
        path: 'status', component : FrontendStatusComponent
    }
];