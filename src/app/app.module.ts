import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Router/app-routing.module';
import { AppComponent } from './app.component';
import { AuthImageSideComponent } from './components/common/auth-image-side/auth-image-side.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignupComponent } from './components/Auth/signup/signup.component';
import { ImportSurveyComponent } from './components/Dashborad/import-survey/import-survey.component';
import { SurveysComponent } from './components/Dashborad/surveys/surveys.component';
import { RecommendationsComponent } from './components/Dashborad/recommendations/recommendations.component';
import { CompanyAccountComponent } from './components/company/company-account/company-account.component';
import { InterestsComponent } from './components/company/interests/interests.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
// import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { StackChartComponent } from './components/common/stack-chart/stack-chart.component';
import { StackChartsComponent } from './components/stack-charts/stack-charts.component';
import { AgeStatisticsComponent } from './components/age-statistics/age-statistics.component';
import {ChartModule} from 'primeng/chart';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthImageSideComponent,
    LoginComponent,
    SignupComponent,
    SurveysComponent,
    RecommendationsComponent,
    CompanyAccountComponent,
    InterestsComponent,
    NavBarComponent,
    StackChartComponent,
    StackChartsComponent,
    AgeStatisticsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // FontAwesomeModule,
    // FaIconLibrary, initialize
    ,ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(library: FaIconLibrary){
  //   library.addIconPacks(fas,far)

  // }
}
