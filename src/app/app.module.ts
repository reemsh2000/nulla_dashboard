import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Router/app-routing.module';
import { InterestsComponent } from './pages/company/interests/interests.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { environment } from '../environments/environment';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {TableModule} from 'primeng/table';


import { AppComponent } from './app.component';
import { AuthImageSideComponent } from './components/common/auth-image-side/auth-image-side.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { SignupComponent } from './pages/Auth/signup/signup.component';
import { CompanyAccountComponent } from './pages/company/company-account/company-account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StackChartComponent } from './components/common/stack-chart/stack-chart.component';
import { StackChartsComponent } from './components/stack-charts/stack-charts.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SnapshotComponent } from './components/common/snapshot/snapshot.component';
import { SearchComponent } from './components/common/search/search.component';
import { AgeStatisticsComponent } from './components/age-statistics/age-statistics.component';
import { FormsModule } from '@angular/forms';
import { routingTable } from './Router/routes';
import { ChartModule } from 'primeng/chart';
import { NavComponent } from './components/common/nav/nav.component';
import { LocationComponent } from './components/location/location.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { DasboradComponent } from './pages/dasborad/dasborad.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ResetpasswordComponent } from './pages/Auth/resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { CacheInterceptorInterceptor } from './cache-interceptor.interceptor';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';
import {MessageService} from 'primeng/api';
import { QuestionStatisticComponent } from './components/common/question-statistic/question-statistic.component';
import { EachQuestionStatisticComponent } from './pages/each-question-statistic/each-question-statistic.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';

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
    ResetpasswordComponent,
    ProfileComponent,
    ErrorMessageComponent,
    QuestionStatisticComponent,
    EachQuestionStatisticComponent,
    CompaniesPageComponent,
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
    MessagesModule,
    MessageModule,
    TableModule
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
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(library: FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
}
