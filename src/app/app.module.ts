import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
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
import { HttpClientModule } from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { StackChartComponent } from './components/common/stack-chart/stack-chart.component';
import { StackChartsComponent } from './components/stack-charts/stack-charts.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SnapshotComponent } from './components/snapshot/snapshot.component';
import { SearchComponent } from './components/search/search.component';
import { AgeStatisticsComponent } from './components/age-statistics/age-statistics.component';
// import { Module } from 'chart.js';
import { FormsModule } from '@angular/forms';


import {ChartModule} from 'primeng/chart';
import { NavComponent } from './components/common/nav/nav.component';
import { LocationComponent } from './components/location/location.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
  ],
  imports: [

    ChartModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    
    // FontAwesomeModule,
    // FaIconLibrary, initialize

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
}
