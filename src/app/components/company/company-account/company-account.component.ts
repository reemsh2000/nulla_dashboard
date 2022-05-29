import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  constructor(private authService: AuthService) { }
 
  companyform = new FormGroup({
    companyName:new FormControl(''),
    companyAddress: new FormControl(''),
    office: new FormControl(''),
    employeeNumber: new FormControl(''),
    holidayDate: new FormControl('')
  
  });
  ngOnInit(): void {
  }
  saveProfileCompany(){
 
 

    this.authService.profileCompany(this.companyform.value)
  }
 
}
