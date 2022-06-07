import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  completeformprofile: boolean;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    title: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    nationality: new FormControl(''),
    gender: new FormControl(''),
  });
  admin: any;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
 
  }
  save() {
    this.authService.profile(this.profileForm.value);
    this.completeformprofile = !this.authService.completeform;
    console.log(this.completeformprofile);
  }
  skip() {
    this.router.navigate(['/dashboard']);
  }
}
