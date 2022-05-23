import { DemographicService } from 'app/services/demographic.service';
import { Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from 'app/services/data.service';
import { DemographicQuestion } from 'app/Interfaces/interfaces';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
    teamsStaticticsData: any = {
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
    private teamsQuestion = new BehaviorSubject<DemographicQuestion>({
        question: '',
        answers: [],
        title: '',
        questionId: ''
    });
    public teamsQuestion$ = this.teamsQuestion.asObservable();
    isShow: boolean = false;


    constructor(
        private dataService: DataService,
        private demographicService: DemographicService
    ) {
        this.demographicService.demographicQuestionsAndAnswers$.subscribe(val => {
            this.teamsQuestion.next(val.filter(val => val.title == 'teams')[0]);
            this.demographicService.getTeamsStatistics(this.teamsQuestion.getValue())
        });
        this.demographicService.teamsStatistics$.subscribe(val => {
            let keys = Object.keys(val)
            let values = Object.values(val)
            this.teamsStaticticsData = {
                labels: keys,
                datasets: [
                    {
                        data: values,
                        backgroundColor: [
                            "#FF6384",
                            "#FFCE56",
                            "#36A2EB",
                            "#02092C",
                            "#2C0204",

                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#FFCE56",
                            "#36A2EB",
                            "#02092C",
                            "#2C0204",


                        ]
                    }
                ]
            };
            if (keys.length) {
                this.isShow = true
            }
        })
    }






}
