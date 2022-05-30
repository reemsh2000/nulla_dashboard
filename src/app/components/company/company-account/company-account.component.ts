import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  constructor(private authService: AuthService) { }
 
  companyform = new FormGroup({
    companyName:new FormControl('',Validators.required),
    companyAddress: new FormControl('',Validators.required),
    office: new FormControl('',Validators.required),
    employeeNumber: new FormControl('',Validators.required),
    holidayDate: new FormControl('',Validators.required)
  
  });
  ngOnInit(): void {
  }
  get f(){
    return this.companyform.controls;
  }
  saveProfileCompany(){
 
 

    this.authService.profileCompany(this.companyform.value)
  }
 
}
