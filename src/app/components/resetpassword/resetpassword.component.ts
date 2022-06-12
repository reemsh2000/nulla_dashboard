import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  resetPassword() {
    this.authService.ResetPassword(this.email);
  }
}
