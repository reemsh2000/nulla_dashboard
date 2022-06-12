import { AsideService } from 'app/services/aside.service';
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
    name: new FormControl(''),
    title: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    nationality: new FormControl(''),
    gender: new FormControl(''),
  });
  admin: any;
  setEmail:any
  constructor(
    private authService: AuthService,
    private router: Router,
    private asideService: AsideService
  ) {
    this.asideService.setSection('Profile');
    
    this.authService.email$.subscribe((data) => {
      this.setEmail=data
      this.profileForm.setValue({
        email: this.setEmail,
        name: '',
        title: '',
        phone: '',
        nationality: '',
        gender: '',
      });
    });
    this.authService.username$.subscribe((data) => {
      this.profileForm.setValue({
        email: this.setEmail,
        name: data.Record.name,
        title: '',
        phone: data.Record.phone,
        nationality: '',
        gender: '',
      });
    });
  }

  ngOnInit(): void {}
  save() {
    this.authService.addProfileInformation(this.profileForm.value);
    this.completeformprofile = !this.authService.completeform;
  }
  skip() {
    this.router.navigate(['/dashboard']);
  }
}
