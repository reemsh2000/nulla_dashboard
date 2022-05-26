import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  constructor(private authService: AuthService) { }
  companyName:string;
  companyAddress: string;
  office:string;
  employeeNumber:Number;
  holidayDate:Date;
  ngOnInit(): void {
  }
  saveProfileCompany(){
    let Record={
      'companyName':this.companyName,
      'companyAddress':this.companyAddress,
      'office':this.office,
      'employeeNumber':this.employeeNumber,
      'holidayDate':this.holidayDate

    }
    this.authService.profileCompany(Record)
  }
 
}
