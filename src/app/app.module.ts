import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Router/app-routing.module';
import { AppComponent } from './app.component';
import { AuthImageSideComponent } from './components/common/auth-image-side/auth-image-side.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignupComponent } from './components/Auth/signup/signup.component';
import { CompanyAccountComponent } from './components/company/company-account/company-account.component';
import { InterestsComponent } from './components/company/interests/interests.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { environment } from '../environments/environment';

import { StackChartComponent } from './components/common/stack-chart/stack-chart.component';
import { StackChartsComponent } from './components/stack-charts/stack-charts.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SnapshotComponent } from './components/snapshot/snapshot.component';
import { SearchComponent } from './components/search/search.component';
import { AgeStatisticsComponent } from './components/age-statistics/age-statistics.component';
import { FormsModule } from '@angular/forms';
import { routingTable } from './Router/routes';
import { ChartModule } from 'primeng/chart';
import { NavComponent } from './components/common/nav/nav.component';
import { LocationComponent } from './components/location/location.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { DasboradComponent } from './components/dasborad/dasborad.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
<<<<<<< HEAD
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
=======
import { CacheInterceptorInterceptor } from './cache-interceptor.interceptor';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import {MessageService} from 'primeng/api';
>>>>>>> 9e40e3a345055932e1f293f7a6562a0e62783109

@NgModule({
  declarations: [
    AppComponent,
    AuthImageSideComponent,
    LoginComponent,
    SignupComponent,
    // SurveysComponent,
    // RecommendationsComponent,
    CompanyAccountComponent,
    InterestsComponent,
    StackChartComponent,
    StackChartsComponent,
    SidebarComponent,
    SnapshotComponent,
    SearchComponent,
    SnapshotComponent,
    SidebarComponent,
    NavComponent,
    AgeStatisticsComponent,
    LocationComponent,
    TeamsComponent,
    WelcomepageComponent,
    DasboradComponent,
<<<<<<< HEAD
    ResetpasswordComponent,
    ProfileComponent,

=======
    ErrorMessageComponent,
>>>>>>> 9e40e3a345055932e1f293f7a6562a0e62783109
  ],
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routingTable),
    ChartModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD

    // FontAwesomeModule,
    // FaIconLibrary, initialize
  ],
  providers: [],
=======
    MessagesModule,
    MessageModule,
    // MessageService
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorInterceptor,
      multi: true,
    },
    MessageService
  ],
>>>>>>> 9e40e3a345055932e1f293f7a6562a0e62783109
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(library: FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
}
