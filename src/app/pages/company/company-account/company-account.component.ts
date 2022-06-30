import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css'],
})
export class CompanyAccountComponent implements OnInit {
  massage: string;
  companyNameCheck: any;
  companyNameValid: any;

  constructor(private authService: AuthService) {

  }

  companyform = new FormGroup({
    companyName: new FormControl('', Validators.required),
    ManagerName: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    employeeNumber: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
  get f() {
    return this.companyform.controls;
  }

  saveProfileCompany() {

    let cName = this.companyform.controls['companyName'].value;
  if(this.companyform.valid){
    this.authService.checkCompnayName(cName).subscribe((data: any) => {
      if (!data.docs.length) {
        this.authService.addProfileCompany(this.companyform.value);
      } else {
        this.massage = 'Company Name has already exist!';
       
      }
    });
  }else{
    this.massage = 'You should enter all feilds';
  }
    
  }
}
