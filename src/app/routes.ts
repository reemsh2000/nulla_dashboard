import { AppComponent } from "./app.component";

import { CompanyAccountComponent } from "./components/company/company-account/company-account.component";
import { InterestsComponent } from "./components/company/interests/interests.component";
import { WelcomepageComponent } from "./components/welcomepage/welcomepage.component";
import {DasboradComponent} from './components/dasborad/dasborad.component'
export const routingTable = [
    { path: '', redirectTo: 'dashborad', pathMatch: 'full'},
    {path:'dashborad',component:DasboradComponent},
  // {path:'welcome',component: WelcomepageComponent},
  // {path:'login',component: LoginComponent},
  // {path:'register',component: SignupComponent},
  // {path:'company',component: CompanyAccountComponent},
  // {path:'intrest',component:InterestsComponent}
 
  ]