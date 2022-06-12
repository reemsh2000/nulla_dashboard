import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/Auth/login/login.component';
import { SignupComponent } from '../components/Auth/signup/signup.component';
import { CompanyAccountComponent } from '../components/company/company-account/company-account.component';
import { InterestsComponent } from '../components/company/interests/interests.component';
import { WelcomepageComponent } from '../components/welcomepage/welcomepage.component';
import { DasboradComponent } from '../components/dasborad/dasborad.component';
import { ResetpasswordComponent } from '../components/resetpassword/resetpassword.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { TeamsComponent } from 'app/components/teams/teams.component';
import { RecommentionComponent } from 'app/components/recommention/recommention.component';
import { ReportsComponent } from 'app/components/reports/reports.component';

export const routingTable = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'company', component: CompanyAccountComponent },
  { path: 'intrest', component: InterestsComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DasboradComponent },
  { path: 'dashboard/profile', component: ProfileComponent },
  { path: 'dashboard/teams', component: TeamsComponent },
  { path: 'dashboard/recommention', component: RecommentionComponent },
  { path: 'dashboard/repots', component: ReportsComponent },
];
