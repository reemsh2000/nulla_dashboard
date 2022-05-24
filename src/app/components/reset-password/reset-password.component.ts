import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
email:string
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  resetPassword(){
    this.authService.ResetPassword(this.email)


  }

}
