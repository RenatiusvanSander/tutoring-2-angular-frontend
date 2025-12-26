import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { FrontendStatusComponent } from "./frontend-status/frontend-status.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { RegisterComponent } from "./register/register.component";
import { MaterialsShopComponent } from "./materials-shop/materials-shop.component";
import { EducationalInstitutionsComponent } from "./educational-institutions/educational-institutions.component";
import { AvailableSpacesComponent } from "./available-spaces/available-spaces.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { ContactComponent } from "./contact/contact.component";
import { OverviewComponent } from "./overview/overview.component";
import { canActivateByAuthenticated } from "./authguards/auth.guard";
import { SettingsComponent } from "./settings/settings.component";
import { UserResolver } from "./resolvers/user.resolver";
import { AddressComponent } from "./settings/Address/address/address.component";
import { AddAddressComponent } from "./settings/Address/add-address/add-address.component";
import { EditAddressComponent } from "./settings/Address/edit-address/edit-address.component";
import { AddressResolver } from "./resolvers/address.resolver";
import { DeleteAddressComponent } from "./settings/Address/delete-address/delete-address.component";
import { AdminComponent } from "./admin/admin.component";
import { adminGuard } from "./authguards/admin.guard";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import { ServiceContractPriceComponent } from "./overview/service-contract-price/service-contract-price.component";
import { AddServiceContractComponent } from "./service-contract/add-service-contract/add-service-contract.component";
import { ServiceContractComponent } from "./service-contract/service-contract.component";
import { AddPriceComponent } from "./price/add-price/add-price.component";
import { PriceComponent } from "./price/price.component";
import { PriceUpdateComponent } from "./price/price-update/price-update.component";
import { AddServiceContractPriceComponent } from "./overview/service-contract-price/add-service-contract-price/add-service-contract-price.component";
import { TutoringAppointmentsComponent } from "./overview/tutoring-appointments/tutoring-appointments.component";
import { AddTutoringAppointmentComponent } from "./overview/tutoring-appointments/add-tutoring-appointment/add-tutoring-appointment.component";
import { UpdateTutoringAppointmentsComponent } from "./overview/tutoring-appointments/update-tutoring-appointments/update-tutoring-appointments.component";

export const app_routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    {
        path: 'welcome', component: WelcomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'status', component: FrontendStatusComponent
    },
    {
        path: 'about-us', component: AboutUsComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'materials', component: MaterialsShopComponent
    },
    {
        path: 'educational-institutions', component: EducationalInstitutionsComponent
    },
    {
        path: 'available-spaces', component: AvailableSpacesComponent
    },
    {
        path: 'disclaimer', component: DisclaimerComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'overview', component: OverviewComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'settings/:id', component: SettingsComponent, canActivate: [canActivateByAuthenticated], resolve: [UserResolver]
    },
    {
        path: 'settings/address/address/:id', component: AddressComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'settings/address/add-address/:userId', component: AddAddressComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'settings/address/edit-address/:id', component: EditAddressComponent, canActivate: [canActivateByAuthenticated], resolve: [AddressResolver]
    }
    ,
    {
        path: 'settings/address/delete-address/:id', component: DeleteAddressComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [adminGuard], data: {roles: 'client_admin'}
    },
    {
        path: 'forbidden', component: ForbiddenComponent
    },
    {
        path: 'overview/service-contract-price', component: ServiceContractPriceComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'overview/service-contract-price/add-service-contract-price', component: AddServiceContractPriceComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'add-service-contract', component: AddServiceContractComponent
    },
    {
        path: 'service-contract', component: ServiceContractComponent
    },
    {
        path: 'add-price', component: AddPriceComponent
    },
    {
        path: 'price', component: PriceComponent
    },
    {
        path: 'update-price/:id', component: PriceUpdateComponent
    },
    {
        path: 'overview/tutoring-appointments', component: TutoringAppointmentsComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'overview/tutoring-appointments/add-tutoring-appointment', component: AddTutoringAppointmentComponent, canActivate: [canActivateByAuthenticated]
    },
    {
        path: 'overview/tutoring-appointments/update-tutoring-appointment', component: UpdateTutoringAppointmentsComponent, canActivate: [canActivateByAuthenticated]
    }
];