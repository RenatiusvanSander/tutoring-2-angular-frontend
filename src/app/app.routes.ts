import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { FrontendStatusComponent } from "./frontend-status/frontend-status.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { RegisterComponent } from "./register/register.component";
import { MaterialsShopComponent } from "./materials-shop/materials-shop.component";
import { EducationalInstitutionsComponent } from "./educational-institutions/educational-institutions.component";
import { AvailablesPracesComponent } from "./availables-praces/availables-praces.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { ContactComponent } from "./contact/contact.component";
import { OverviewComponent } from "./overview/overview.component";
import { authGuard } from "./auth.guard";

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
    },
    {
        path: 'about-us', component : AboutUsComponent
    },
    {
        path: 'register', component : RegisterComponent
    },
    {
        path: 'materials', component : MaterialsShopComponent
    },
    {
        path: 'educational-institutions', component : EducationalInstitutionsComponent
    },
    {
        path: 'available-spaces', component : AvailablesPracesComponent
    },
    {
        path: 'disclaimer', component : DisclaimerComponent
    },
    {
        path: 'contact', component : ContactComponent
    },
    {
        path: 'overview', component : OverviewComponent, canActivate: [authGuard]
    }
];