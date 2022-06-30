import { EachQuestionStatisticComponent } from '../pages/each-question-statistic/each-question-statistic.component';
import { LoginComponent } from '../pages/Auth/login/login.component';
import { SignupComponent } from '../pages/Auth/signup/signup.component';
import { CompanyAccountComponent } from '../pages/company/company-account/company-account.component';
import { InterestsComponent } from '../pages/company/interests/interests.component';
import { WelcomepageComponent } from '../pages/welcomepage/welcomepage.component';
import { DasboradComponent } from '../pages/dasborad/dasborad.component';
import { ResetpasswordComponent } from '../pages/Auth/resetpassword/resetpassword.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { CompaniesPageComponent } from 'app/pages/companies-page/companies-page.component';
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
  { path: 'dashboard/allquestions', component: EachQuestionStatisticComponent },
  { path: 'dashboard/allcompamies', component: CompaniesPageComponent },

];
