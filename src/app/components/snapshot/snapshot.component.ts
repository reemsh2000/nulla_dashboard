import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // persentage :number = 0;
  // statistics:AgeStatistics = {
  //   agree=0, //18-24


  // };
  // getAgeQuestions(surveyId: string): Question[] {
  //   let ageQuestion: Question[] = []
  //   this.dataService.getQuestions(surveyId).subscribe((res: any) => {
  //     console.log(res)
  //     for (let i = 0; i < 1; i++) {
  //       ageQuestion.push(res.fields[0]);

  //     }
  //     console.log(ageQuestion)

  //   });
  //   return ageQuestion;
  // }




  // getPersonalityAnswersStatistics(surveyId: string): AgeStatistics {
  //   let personalityQusetionsStatistics: AgeStatistics = {
  //     Adolescence:0, //18-24
  //     Earlyadulthood:0, //24-34
  //         Midlife:0, //35-44
  //         Matureadulthood:0, //45-54
  //   }
  //   this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
  //     answers.items.forEach((surveyResponse: any) => {
  //       surveyResponse.answers.forEach((answer: any) => {
  //         this.ageQuestions.forEach((peronalityQusetion: any) => {
  //           if (answer.field.id === peronalityQusetion.id) {
  //             switch (answer.choice.label) {
  //               case 'agree':

  //               this.agree = this.agree + 1;
  //               break;

  //             case '25-34':
  //               this.statistics['Earlyadulthood'] = this.statistics['Earlyadulthood'] + 1;
  //               break;
  //             case '35-44':
  //               this.statistics['Midlife'] = this.statistics['Midlife'] + 1;
  //               break;
  //             }
  //           }

  //         }); //questions loop end 
  //       }) //answers loop end 
  //     });// survey response loop end 
  //   }

  //   ); // request end 
  //   return personalityQusetionsStatistics;
  // }
  // //   }
}
