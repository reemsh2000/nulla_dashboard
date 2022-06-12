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
  setEmail:any;
  setName:any;
  setPhone:any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private asideService: AsideService
  ) {
    this.authService.getProfileData()
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
      this.setName=data?.Record?.name;
      this.setPhone=data?.Record?.phone
      this.profileForm.setValue({
        email: this.setEmail,
        name:this.setName ,
        title: '',
        phone:this.setPhone ,
        nationality: '',
        gender: '',
      });
    });
    this.authService.profileData$.subscribe((data) => {
      this.profileForm.setValue({
        email: this.setEmail,
        name: this.setName,
        title: data?.title,
        phone: this.setPhone,
        nationality:data?.nationality,
        gender: data?.gender,
      });
    })
  
  }

  ngOnInit(): void {}
  save() {
    this.authService.addProfileInformation(this.profileForm.value);
    console.log('rawand',this.profileForm.value);
    this.completeformprofile = !this.authService.completeform;
  }
  skip() {
    this.router.navigate(['/dashboard/profile']);
  }
}
